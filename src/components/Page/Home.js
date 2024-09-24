import { Row, Col, Typography } from "antd";
import BookItem from "../BookItem/BookItem";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";
import { selectFilteredProducts } from "../redux/slice/productsSlice";

const { Text } = Typography;

function Home() {
  const filteredProducts = useSelector(selectFilteredProducts);

  return (
    <div>
      <SearchBar />

      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Text type="secondary" style={{ fontSize: "18px" }}>
            No products found for your search.
          </Text>
        </div>
      ) : (
        <Row gutter={[16, 16]}>
          {filteredProducts.map((item) => (
            <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
              <BookItem data={item} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Home;
