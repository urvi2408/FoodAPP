import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_35p114pH8oNuHX72SmrvsFqh00Azv3ZaIA");

const Card = () => {
  return (
    <div className="App">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
    </div>
  );
};

export default Card;