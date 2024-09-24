import { Menu } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ShopHeader = () => {
  return (
    <Menu
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        paddingBottom: "40px",
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
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default ShopHeader;
