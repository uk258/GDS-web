import React from "react";
import { Form, Input, Button, message } from "antd";
import { useSetRecoilState } from "recoil";
import { authPageState } from "../recoil/atoms";
import axios from "axios";
import { USER_API_URL } from "../config";

const SigninPage = () => {
  const setPage = useSetRecoilState(authPageState);

  const onFinish = async (values) => {
    try {
      // 检查用户名是否已存在
      const res = await axios.get(`${USER_API_URL}?username=${values.username}`);
      if (res.data && res.data.length > 0) {
        message.error("该用户名已被注册！");
        return;
      }
      // 注册（追加用户）
      await axios.post(USER_API_URL, {
        username: values.username,
        password: values.password,
      });
      message.success(`注册成功，注册用户名是：${values.username}, 密码是：${values.password}`);
      setPage("login");
    } catch (err) {
      message.error("注册失败，请重试！");
    }
  };

  return (
    <>
      <h2 style={{ fontSize: "30px" }}>注册</h2>
      <Form name="signin" onFinish={onFinish} layout="vertical">
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "请输入用户名!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="确认密码"
          name="confirm"
          dependencies={['password']}
          rules={[
            { required: true, message: "请确认密码!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('两次输入的密码不一致!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            注册
          </Button>
        </Form.Item>
      </Form>
      <Button type="link" block onClick={() => setPage("login")}>
        已有账号？去登录
      </Button>
    </>
  );
};

export default SigninPage;