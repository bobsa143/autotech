import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface OrangeMoneyPaymentRequest {
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
    const { orderId, amount, customerPhone, customerEmail, customerName, items }: OrangeMoneyPaymentRequest = await req.json();

    const ORANGE_MERCHANT_KEY = Deno.env.get("ORANGE_MERCHANT_KEY") || "";
    const ORANGE_AUTH_HEADER = Deno.env.get("ORANGE_AUTH_HEADER") || "";
    const ORANGE_API_URL = "https://api.orange.com/orange-money-webpay/dev/v1/webpayment";

    if (!ORANGE_MERCHANT_KEY || !ORANGE_AUTH_HEADER) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Configuration Orange Money manquante. Veuillez contacter l'administrateur.",
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
      merchant_key: ORANGE_MERCHANT_KEY,
      currency: "XOF",
      order_id: orderId,
      amount: totalAmount,
      return_url: `${req.headers.get("origin")}/payment-success?order_id=${orderId}`,
      cancel_url: `${req.headers.get("origin")}/payment-cancel`,
      notif_url: `${Deno.env.get("SUPABASE_URL")}/functions/v1/orange-money-webhook`,
      lang: "fr",
      reference: orderId,
    };

    const response = await fetch(ORANGE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": ORANGE_AUTH_HEADER,
      },
      body: JSON.stringify(paymentData),
    });

    const result = await response.json();

    if (response.ok && result.payment_url) {
      return new Response(
        JSON.stringify({
          success: true,
          paymentUrl: result.payment_url,
          orderId: orderId,
          payToken: result.pay_token,
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
          message: "Erreur lors de la création du paiement Orange Money",
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
    console.error("Orange Money payment error:", error);
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
