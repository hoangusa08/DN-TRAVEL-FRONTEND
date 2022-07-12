import { useEffect, useRef } from "react";

const PaypalButton = ({ productName, totalFee, handleSuccess, currency }) => {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: `Thanh toán đơn hàng cho sản phẩm ${productName}}`,
                amount: {
                  currency_code: "USD",
                  value: (totalFee / currency?.USD_VND).toFixed(2),
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          handleSuccess(true);
          return;
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, [handleSuccess, productName, totalFee]);

  return <div ref={paypal}></div>;
};

export default PaypalButton;
