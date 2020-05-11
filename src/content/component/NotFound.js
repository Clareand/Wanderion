import React from "react";
import { Layout, Result } from "antd";
import ButtonLink from './../layout/ButtonLink'
import "./../css/style.css";
const notFound = require(`../../assets/img/404.png`);
// import './style.css';
const { Content, Footer } = Layout;
function NotFound({
 text
}) {
  return (
    <Layout className="layout">
      <Content>
        <Result
          icon={<img src={notFound} style={{ maxWidth: "30%" }} />}
          subTitle={<p className="md-blue">{text}</p>}
          extra={
            <ButtonLink
              text="Home"
              background="#000053"
              className="btn-md-blue"
              href="/"
            />
          }
        />
      </Content>
    </Layout>
  );
}

export default NotFound;
