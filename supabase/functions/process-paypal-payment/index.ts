import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface PaymentRequest {
  amount: number;
  currency: string;
  orderData: {
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    shipping_address: string;
    items: string;
    total_amount: number;
  };
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { amount, currency, orderData }: PaymentRequest = await req.json();

    const paypalMerchantEmail = "coopelfkarna@gmail.com";

    const paypalUrl = new URL("https://www.paypal.com/cgi-bin/webscr");
    paypalUrl.searchParams.append("cmd", "_xclick");
    paypalUrl.searchParams.append("business", paypalMerchantEmail);
    paypalUrl.searchParams.append("item_name", "Said Auto Tech - Commande");
    paypalUrl.searchParams.append("amount", amount.toFixed(2));
    paypalUrl.searchParams.append("currency_code", currency);
    paypalUrl.searchParams.append("return", `${req.headers.get("origin")}/payment-success`);
    paypalUrl.searchParams.append("cancel_return", `${req.headers.get("origin")}/payment-cancelled`);

    paypalUrl.searchParams.append("custom", JSON.stringify({
      customer_name: orderData.customer_name,
      customer_email: orderData.customer_email,
      customer_phone: orderData.customer_phone,
    }));

    return new Response(
      JSON.stringify({
        success: true,
        paypalUrl: paypalUrl.toString(),
        message: "Redirection vers PayPal",
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Erreur inconnue",
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
