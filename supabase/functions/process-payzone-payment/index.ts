import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface PaymentRequest {
  orderId: string;
  amount: number;
  customerEmail: string;
  customerName: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { orderId, amount, customerEmail, customerName, items }: PaymentRequest = await req.json();

    // PayZone configuration (à configurer avec vos identifiants PayZone)
    const PAYZONE_MERCHANT_ID = Deno.env.get("PAYZONE_MERCHANT_ID") || "";
    const PAYZONE_SECRET_KEY = Deno.env.get("PAYZONE_SECRET_KEY") || "";
    const PAYZONE_API_URL = "https://api.payzone.ma/v1/payment";

    if (!PAYZONE_MERCHANT_ID || !PAYZONE_SECRET_KEY) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Configuration PayZone manquante. Veuillez contacter l'administrateur.",
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Créer la demande de paiement PayZone
    const paymentData = {
      merchant_id: PAYZONE_MERCHANT_ID,
      order_id: orderId,
      amount: amount,
      currency: "MAD",
      customer_email: customerEmail,
      customer_name: customerName,
      return_url: `${req.headers.get("origin")}/payment-success`,
      cancel_url: `${req.headers.get("origin")}/payment-cancel`,
      notify_url: `${Deno.env.get("SUPABASE_URL")}/functions/v1/payzone-webhook`,
      items: items,
    };

    // Générer la signature (à adapter selon la documentation PayZone)
    const signature = await generatePayZoneSignature(paymentData, PAYZONE_SECRET_KEY);

    const response = await fetch(PAYZONE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${PAYZONE_SECRET_KEY}`,
      },
      body: JSON.stringify({
        ...paymentData,
        signature,
      }),
    });

    const result = await response.json();

    if (result.success && result.payment_url) {
      return new Response(
        JSON.stringify({
          success: true,
          paymentUrl: result.payment_url,
          orderId: orderId,
        }),
        {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Erreur lors de la création du paiement",
          error: result,
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error) {
    console.error("PayZone payment error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Erreur serveur lors du traitement du paiement",
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});

async function generatePayZoneSignature(data: any, secretKey: string): Promise<string> {
  const sortedData = Object.keys(data)
    .sort()
    .map(key => `${key}=${data[key]}`)
    .join("&");

  const encoder = new TextEncoder();
  const keyData = encoder.encode(secretKey);
  const messageData = encoder.encode(sortedData);

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign("HMAC", cryptoKey, messageData);

  return Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}
