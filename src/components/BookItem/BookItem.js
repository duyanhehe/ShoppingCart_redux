import { Card, Button } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";

export default function BookItem({ data }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...data,
        quantity: 1,
      })
    );
    alert("Added to cart");
  };

  return (
    <Card
      hoverable
      cover={
        <img
          src={data.imageUrl}
          alt={data.name}
          style={{ height: "300px", objectFit: "cover" }}
        />
      }
      actions={[
        <Button onClick={handleAddToCart} type="primary">
          Add to cart
        </Button>,
      ]}
    >
      <Card.Meta
        title={data.name}
        description={
          <>
            <p>
              Author: <i>{data.author}</i>
            </p>
            <p>Price: {data.price}$</p>
          </>
        }
      />
    </Card>
  );
}
