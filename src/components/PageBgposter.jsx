import React from "react";
import { Typography, Image } from "antd";

const { Title } = Typography;

const PageBgposter = () => (
  <div
    style={{
      background: "linear-gradient(to bottom, rgba(16,95,165,1) 0%, rgba(16,95,165,0.5) 100%)",
      width: "100%",
      height: "100%",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <div
      style={{
        position: "relative",
        zIndex: 2,
        width: 1190,
        maxWidth: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      }}
    >
      <Image
        preview={false}
        src="https://graduate.hrbust.edu.cn/_upload/site/00/57/87/logo.png"
        alt=""
        width={260}
        style={{ background: "transparent" }}
      />
      <span
        style={{
          display: "inline-block",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#8db1d1",
          margin: "0 24px"
        }}
      ></span>
      <Title
        level={3}
        style={{
          color: "#fff",
          fontWeight: "bold",
          margin: 0,
          lineHeight: "80px"
        }}
      >
        数字校园统一身份认证
      </Title>
    </div>
  </div>
);

export default PageBgposter;