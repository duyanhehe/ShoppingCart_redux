import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpRequest } from "../redux/slice/authSlice";
import { Alert, Form, Input, Button, Typography } from "antd";

const { Text } = Typography;

const SignUp = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = () => {
    dispatch(signUpRequest(credentials));
  };

  return (
    <div style={{ maxWidth: "300px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>
        <Text style={{ fontSize: "18px" }}>Sign Up</Text>
      </h2>
      {error && <Alert message={error} type="error" />}
      <Form onFinish={handleSubmit}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            placeholder="Email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            placeholder="Password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
