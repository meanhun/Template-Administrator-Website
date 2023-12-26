import React, { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Form, Input, Button, Card, Alert } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { LOGO } from "../../Routes/Route";
import { LoginApi } from "../../services/Login";

const LoginScreen = () => {
  const { handleLogin } = useContext(AppContext);
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [isMessage, setIsMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setIsShowAlert(false);
    setLoading(true);
    const dataLogin = {
      User_Name: values.username,
      Password: values.password,
    };

    LoginApi(dataLogin, (res) => {
      setLoading(false);
      if (res && res.status === 200) {
        const updatedUserData = { ...res.data.Data, Auth: "admin" };
        handleLogin(updatedUserData);
      } else if (res && res.status === 400) {
        setIsMessage("Invalid login information");
        setIsShowAlert(true);
      } else if (res && res.status === 500) {
        setIsMessage("Cannot connect to server.");
        setIsShowAlert(true);
      } else {
        setIsMessage("Internet connection error, please check again.");
        setIsShowAlert(true);
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        title={
          <div>
            <img
              width={45}
              src={LOGO.logoAxons}
              alt="LogoAxons"
              style={{ marginRight: 10 }}
            />
            <span
              style={{
                fontSize: 22,
                color: "#03008B",
                fontFamily: "IBMPlexSans-Bold",
              }}
            >
              LOGIN
            </span>
          </div>
        }
        style={{
          borderRadius: 10,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          margin: 20,
          padding: 25,
          width: 590,
        }}
      >
        <Form
          name="normal_login"
          onFinish={onFinish}
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              style={{ height: 42 }}
              autoComplete="username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              style={{ height: 42 }}
              autoComplete="current-password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              style={{
                width: "100%",
                height: 36,
                fontFamily: "IBMPlexSans-Medium",
              }}
            >
              Login
            </Button>
          </Form.Item>

          <Form.Item>
            <Link
              to="https://iservice.cp.com.vn/Account/ForgotPassword/"
              style={{ float: "right", fontFamily: "IBMPlexSans-Medium" }}
            >
              Forgot Password?
            </Link>
          </Form.Item>
          {isShowAlert && (
            <Alert
              message={isMessage}
              type="error"
              style={{ fontFamily: "IBMPlexSans-Medium" }}
            />
          )}
        </Form>
      </Card>
    </div>
  );
};

export default LoginScreen;
