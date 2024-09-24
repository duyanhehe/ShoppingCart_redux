import { Card, Button } from "antd";

export default function BookItem({ data }) {
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
      actions={[<Button type="primary">Add to cart</Button>]}
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
