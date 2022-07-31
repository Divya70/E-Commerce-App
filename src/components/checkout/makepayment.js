import { initilizeRazorpay } from "./initilizeRazorpay";
const makePayment = async ({ totalPrice, dispatch, token }) => {
  const res = await initilizeRazorpay();
  if (!res) {
    alert("Razorpay SDK Failed to load");
    return;
  }

  var options = {
    key: "rzp_test_bZrAMgH5aNRY0R",
    key_id: "rzp_test_bZrAMgH5aNRY0R",
    key_secret: "MleEXZwfKLDGsRfnDhYzsxSf",
    name: "Flavorsome",
    currency: "INR",
    amount: totalPrice * 100,
    description: "Thankyou for your test donation",

    handler: function (response) {
      var id = response.razorpay_payment_id.slice(0, 8);
      dispatch({ type: "CLEAR_FROM_CART", payload: token });
    },
    prefill: {
      name: "Divya Namdev",
      email: "test@gmail.com",
      contact: "9999999999",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

export { makePayment };
