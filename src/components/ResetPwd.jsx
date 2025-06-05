import React from "react";
import { Form, Input, Button, message } from "antd";
import { useSetRecoilState } from "recoil";
import { authPageState } from "../recoil/atoms";
import axios from "axios";
import { USER_API_URL } from "../config";

const ResetPwd = () => {
  const setPage = useSetRecoilState(authPageState);

  const onFinish = async (values) => {
    try {
      // 查找用户
      const res = await axios.get(`${USER_API_URL}?username=${values.username}`);
      if (res.data && res.data.length > 0) {
        const user = res.data[0];
        // 修改密码
        await axios.patch(`${USER_API_URL}/${user.id}`, {
          password: values.password,
        });
        message.success("密码修改成功，请使用新密码登录！");
        setPage("login");
      } else {
        message.error("用户名输入错误！");
      }
    } catch (err) {
      message.error("密码修改失败，请重试！");
    }
  };

  return (
    <>
      <h2 style={{ fontSize: "30px" }}>重置密码</h2>
      <Form name="resetpwd" onFinish={onFinish} layout="vertical">
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "请输入用户名!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="新密码"
          name="password"
          rules={[{ required: true, message: "请输入新密码!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="确认新密码"
          name="confirm"
          dependencies={['password']}
          rules={[
            { required: true, message: "请确认新密码!" },
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
            修改密码
          </Button>
        </Form.Item>
      </Form>
      <Button type="link" block onClick={() => setPage("login")}>
        返回登录
      </Button>
    </>
  );
};

export default ResetPwd;