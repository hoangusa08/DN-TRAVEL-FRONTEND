import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const PaypalButton = ({ productName, totalFee, handleSuccess }) => {
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
                  value: (totalFee / 23000).toFixed(2),
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          handleSuccess(true);
          return toast("Thanh toán thành công");
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
