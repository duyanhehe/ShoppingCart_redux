import { Card, Button, Alert } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
import { useState } from "react";

export default function BookItem({ data }) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...data,
        quantity: 1,
      })
    );
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  };

  return (
    <div>
      {visible && (
        <Alert
          message="Added to cart"
          type="success"
          showIcon
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            margin: "10px",
            zIndex: 10,
          }}
        />
      )}

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
    </div>
  );
}
