import { Row, Col } from "antd";
import productList from "../data/products.json";
import BookItem from "../BookItem/BookItem";

function Home() {
  return (
    <Row gutter={[16, 16]}>
      {productList.map((item) => (
        <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
          <BookItem data={item} />
        </Col>
      ))}
    </Row>
  );
}

export default Home;
