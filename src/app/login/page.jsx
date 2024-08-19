"use client";

import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const App = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [isValid, setValid] = useState(true);

  const closeAlert = () => {
    setValid(true);
  };

  const onFinish = async (values) => {
    const identity = values.email;
    const password = values.password;

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identity, password }),
      });
      if (response.ok) {
        form.resetFields();
        router.push("/auth/home");
      } else {
        console.log("User authentication failed.");
        setValid(false);
      }
    } catch (error) {
      console.log("Error while loging-in: ", error);
    }
  };

  return (
    <>
      {!isValid && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-10 py-3 rounded fixed top-8 left-1/2 transform -translate-x-1/2 z-50 shadow-lg"
          role="alert"
        >
          <strong className="font-bold">Login failed! </strong>
          <span className="block sm:inline">Invalid username or password.</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={closeAlert}
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
      <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
        <div className="w-full max-w-md bg-white p-8 shadow-md rounded">
          <Link href="/">
            <HomeOutlined />
          </Link>
          <h1 className="text-3xl font-bold text-center mb-8">Login Page</h1>

          <Form
            form={form}
            name="login"
            className=""
            initialValues={{ remember: false }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your Email!" },
                { type: "email", message: "Invalid Email form!" },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className="" href="">
                Forgot password
              </a>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Log in
              </Button>
              Or <a href="/register">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default App;
