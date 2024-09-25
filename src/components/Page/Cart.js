import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { Button, Row, Typography, notification } from "antd";
import { confirmBuy } from "../redux/slice/cartSlice";
const { Text } = Typography;

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleConfirmBuy = () => {
    if (isAuthenticated) {
      dispatch(confirmBuy({ cart, user }));
    } else {
      notification.error({
        message: "Login required",
        description: "You need to login to confirm the purchase",
      });
      navigate("/login");
    }
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      {cart?.list && cart?.list.length > 0 ? (
        <Row>
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
                <td colSpan={2}>{cart?.total}$</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan={5} style={{ textAlign: "right" }}>
                  <Button type="primary" onClick={handleConfirmBuy}>
                    Confirm Purchase
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </Row>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h5>
            <Text>Your cart is empty</Text>
          </h5>
          <Button onClick={() => navigate("/")}> Shop Now</Button>
        </div>
      )}
    </div>
  );
}
