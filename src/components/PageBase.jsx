import React, { useState } from "react";
import LoginPage from "./LoginPage";
import SigninPage from "./SigninPage";
import ResetPwd from "./ResetPwd";
import PageBgposter from "./PageBgposter";
import { Row, Col, Card } from "antd";
import { useRecoilValue } from "recoil";
import { authPageState } from "../recoil/atoms";

const PageBase = () => {
  const page = useRecoilValue(authPageState);
  const [cardHover, setCardHover] = useState(false);

  return (
    // 整体背景图片
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://cs.hrbust.edu.cn/_upload/article/images/d1/d7/2e843f0d43c49e15064b0cafa2a9/9477c051-4267-4d0a-b979-db221c1b6135.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        opacity: 1,
      }}
    >
      <Row style={{ minHeight: "100vh" }}>
        {/* 上半部分,使用PageBgposter组件,用于显示背景海报 */}
        <Col span={24} style={{ height: "20vh" }}>
          <PageBgposter />
        </Col>
        {/* 下半部分,用于显示登录、注册和重置密码等功能 */}
        {/* 进行背景颜色渐变调整 */}
        <Col
          span={24}
          style={{
            height: "80vh",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            background: "linear-gradient(to bottom, rgba(16,95,165,0.5) 0%,  rgba(16, 95, 165, 0.7) 100%)",
          }}
        >
          {/* 卡片组件,用于包裹登录、注册和重置密码的内容,根据page状态渲染不同的组件 */}
          <Card
            style={{
              minWidth: 350,
              marginTop: 50,
              opacity: cardHover ? 1 : 0.9,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={() => setCardHover(true)}
            onMouseLeave={() => setCardHover(false)}
          >
            {/* 登录组件 */}
            {page === "login" && <LoginPage />}
            {/* 注册组件 */}
            {page === "signin" && <SigninPage />}
            {/* 重置密码组件 */}
            {page === "resetpwd" && <ResetPwd />}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PageBase;