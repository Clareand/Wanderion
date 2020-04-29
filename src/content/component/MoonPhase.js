import React, { Component } from 'react';
import './../css/style.css';
import { Layout, Row, Col } from 'antd';
import CardImg from "./../layout/CardImg";
const { Content } = Layout; 
const moon = [
  {
    image: require("./../../assets/moon/phase_waxing_crescent.png"),
    value: "0",
    title: "Waxing Crescent",
    text: "21"
  }
];
class MoonPhase extends Component {
    render() {
        return (
          <Layout className="layout">
            <Content style={{ overflow: "hidden" }}>
              <Row className="section-container">
                <Col lg={24}>
                  <div className="big-blue title-maps-container">
                    Moon Phase Finder
                  </div>
                </Col>
                <Col lg={24}>
                  <div className="sm-blue desc-maps-container">
                    let's Find your moon phase by your moment!
                  </div>
                </Col>
                <Col lg={24}>
                  <Row gutter={[48, 16]}>
                    {moon.map(data => (
                      <Col span={8}>
                        <CardImg
                          hoverable={true}
                          image={data.image}
                          className="card-img"
                          text1={<p className="-title">{data.title}</p>}
                          bordered={false}
                        />
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Content>
          </Layout>
        );
    }
}

export default MoonPhase;