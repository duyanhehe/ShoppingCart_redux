import { Menu, Dropdown, Avatar } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slice/authSlice";

const ShopHeader = () => {
  const { list } = useSelector((state) => state.cart);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  // Dropdown menu for user actions
  const userMenu = (
    <Menu>
      <Menu.Item key="logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

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
        {isAuthenticated ? (
          <Dropdown overlay={userMenu} trigger={["click"]}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Avatar icon={<UserOutlined />} />
              <span style={{ marginLeft: 8 }}>{user.email}</span>{" "}
              {/* Display user email */}
            </div>
          </Dropdown>
        ) : (
          <>
            <Menu.Item key="/login">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="/signup">
              <Link to="/signup">Sign Up</Link>
            </Menu.Item>
          </>
        )}
      </div>
    </Menu>
  );
};

export default ShopHeader;
