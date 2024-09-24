import { Row } from "antd";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div style={{ paddingTop: "50px" }}>
      <Row>
        {cart?.list && cart?.list.length > 0 ? (
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody style={{ verticalAlign: "middle" }}>
              {cart?.list.map((item) => {
                return <CartItem key={item?.id} data={item} />;
              })}
              <tr style={{ fontSize: 20, textAlign: "right" }}>
                <td colSpan={3}>Total:</td>
                <td colSpan={1}>{cart?.total}$</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        ) : (
          <h5>Your cart is empty</h5>
        )}
      </Row>
    </div>
  );
}
