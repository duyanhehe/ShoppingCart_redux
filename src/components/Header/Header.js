import { Menu } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ShopHeader = () => {
  const { list } = useSelector((state) => state.cart);

  return (
    <Menu
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
      mode="horizontal"
    >
      <Menu.Item style={{ marginRight: "auto" }}>
        <Link to="/">Shop Name</Link>
      </Menu.Item>
      <Menu.Item style={{ marginLeft: "auto" }}>
        <Link to="/cart">
          <ShoppingCartOutlined />
          Cart
          <span> {list?.length} </span>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default ShopHeader;
