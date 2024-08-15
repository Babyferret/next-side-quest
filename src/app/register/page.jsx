"use client";

import React from "react";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { HomeOutlined } from "@ant-design/icons";
import Link from "next/link";

const App = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = async (values) => {
    console.log("Values: ", values);
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded">
        <Link href="home">
          <HomeOutlined />
        </Link>
        <h1 className="text-3xl font-bold text-center mb-8">Register Page</h1>
        <Form
          form={form}
          name="register"
          className=""
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
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
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="confirmpassword"
            rules={[
              {
                required: true,
                message: "Please input your Confirm Password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Password do not match!"));
                },
              }),
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Register
            </Button>
            Already have an account? <a href="/login">Sign in</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default App;
