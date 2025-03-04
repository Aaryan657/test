import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("your-publishable-key-here");

const CheckoutButton = () => {
  const handleClick = async () => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: "price_ID", quantity: 1 }],
      mode: "payment",
      successUrl: "https://yourwebsite.com/success",
      cancelUrl: "https://yourwebsite.com/cancel",
    });
    if (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleClick} style={{ padding: "10px 20px", fontSize: "16px" }}>
      Pay Now
    </button>
  );
};

export default function PaymentPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Checkout</h1>
      <CheckoutButton />
    </div>
  );
}
