import { Form, Input, Button, message } from "antd";
import { useSetRecoilState } from "recoil";
import { authPageState } from "../recoil/atoms";
import axios from "axios";
import { USER_API_URL } from "../config";

const LoginPage = () => {
  const setPage = useSetRecoilState(authPageState);

  const onFinish = async (values) => {
    try {
      const res = await axios.get(`${USER_API_URL}?username=${values.username}&password=${values.password}`);
      if (res.data && res.data.length > 0) {
        message.success("登录成功！");
        setTimeout(() => {
          window.location.href = "https://cs.hrbust.edu.cn/";
        }, 1000);
      } else {
        message.error("用户名或密码错误，登录失败！");
      }
    } catch (err) {
      message.error("登录请求失败！");
    }
  };

  return (
    <>
      <h2  style={{ fontSize: "30px" }}>登录</h2>
      <Form name="login" onFinish={onFinish} layout="vertical">
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
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
      </Form>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button type="link" onClick={() => setPage("resetpwd")}>
          忘记密码？
        </Button>
        <Button type="link" onClick={() => setPage("signin")}>
          没有账号？去注册
        </Button>
      </div>
    </>
  );
};

export default LoginPage;