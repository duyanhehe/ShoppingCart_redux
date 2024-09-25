import { Menu } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ShopHeader = () => {
  const { list } = useSelector((state) => state.cart);
  const location = useLocation(); // Get the current location

  return (
    <Menu
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
      mode="horizontal"
      selectedKeys={[location.pathname]} // Select the current path
    >
      <Menu.Item key="/">
        <Link to="/">Shop Name</Link>
      </Menu.Item>

      <div style={{ display: "flex", marginLeft: "auto" }}>
        <Menu.Item key="/cart">
          <Link to="/cart">
            <ShoppingCartOutlined />
            Cart
            <span> {list?.length} </span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/login">
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="/signup">
          <Link to="/signup">SignUp</Link>
        </Menu.Item>
      </div>
    </Menu>
  );
};

export default ShopHeader;
