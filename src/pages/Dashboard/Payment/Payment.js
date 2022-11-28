import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import Checkout from "./Checkout";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  const { itemName, rePrice } = booking;
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="text-3xl">Payment for {itemName}</h3>
      <p className="text-xl">
        Please pay <strong>${rePrice}</strong> for your Purchase
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <Checkout booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
