// domain/.netlify/functions/create-payment-intent
require("dotenv").config();

const stripe = require("stripe")(process.env.VITE_AUTH_STRIPE_SECRET_KEY);
exports.handler = async (event: any, context: any) => {
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);

    const calculateOrderAmount = () => {
      return shipping_fee + total_amount;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "inr",
        payment_method_types: ["card"],
        description: "Exported transaction goes here",
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  }
  return {
    statusCode: 200,
    body: "Create Payment Intent",
  };
};
