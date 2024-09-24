import { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, InputNumber, notification } from "antd";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/slice/cartSlice";

function CartItem({ data }) {
  const dispatch = useDispatch();

  console.log(data);
  const [quantity, setQuantity] = useState(data?.quantity);
  const [totalPrice, setTotalPrice] = useState(+data?.price * +data?.quantity);

  const handleChange = (value) => {
    const validValue = value > 0 ? value : 1;
    setQuantity(validValue);
  };

  const handleRemove = () => {
    dispatch(removeItem({ id: data?.id }));
    notification.success({
      message: "Item Removed",
      description: `${data.name} has been removed from your cart.`,
      placement: "topRight",
    });
  };

  useEffect(() => {
    setTotalPrice(data?.price * quantity);
    dispatch(updateQuantity({ id: data?.id, quantity }));
  }, [quantity, data?.price, data?.id, dispatch]);

  return (
    <tr>
      <td>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={data.imageUrl}
            alt={data.name}
            style={{ width: "50px", height: "50px", marginRight: "10px" }}
          />
          <p style={{ margin: 0 }}>{data.name}</p>
        </div>
      </td>
      <td>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data.price}$
        </div>
      </td>
      <td>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InputNumber min={1} value={quantity} onChange={handleChange} />
        </div>
      </td>
      <td>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {totalPrice}$
        </div>
      </td>
      <td>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button color="danger" variant="solid" onClick={handleRemove}>
            <DeleteOutlined />
          </Button>
        </div>
      </td>
    </tr>
  );
}

export default CartItem;
