import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface WavePaymentRequest {
  orderId: string;
  amount: number;
  customerPhone: string;
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
    const { orderId, amount, customerPhone, customerEmail, customerName, items }: WavePaymentRequest = await req.json();

    const WAVE_API_KEY = Deno.env.get("WAVE_API_KEY") || "";
    const WAVE_API_URL = "https://api.wave.com/v1/checkout/sessions";

    if (!WAVE_API_KEY) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Configuration Wave manquante. Veuillez contacter l'administrateur.",
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

    const totalAmount = Math.round(amount * 655.957);

    const paymentData = {
      amount: totalAmount,
      currency: "XOF",
      error_url: `${req.headers.get("origin")}/payment-cancel`,
      success_url: `${req.headers.get("origin")}/payment-success?order_id=${orderId}`,
      client_reference: orderId,
      customer: {
        name: customerName,
        email: customerEmail,
        phone: customerPhone,
      },
      metadata: {
        order_id: orderId,
        items: JSON.stringify(items),
      },
    };

    const response = await fetch(WAVE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${WAVE_API_KEY}`,
      },
      body: JSON.stringify(paymentData),
    });

    const result = await response.json();

    if (response.ok && result.wave_launch_url) {
      return new Response(
        JSON.stringify({
          success: true,
          paymentUrl: result.wave_launch_url,
          orderId: orderId,
          checkoutId: result.id,
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
          message: "Erreur lors de la création du paiement Wave",
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
    console.error("Wave payment error:", error);
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
