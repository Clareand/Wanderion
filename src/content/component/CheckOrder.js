import React, { Component } from 'react';
import './../css/style.css';
import { Layout, Row, Col, Input } from 'antd';
const { Content, Footer } = Layout; 
class CheckOrder extends Component {
    render() {
        return (
          <Layout className="layout">
            <Content style={{ overflow: "hidden" }}>
              <Row className="section-container">
                <Col lg={24}>
                  <div className="big-blue title-maps-container">
                    Find Your Order
                  </div>
                </Col>
                <Col lg={24}>
                  <div className="sm-blue desc-maps-container">
                    Please Insert your Code Order
                  </div>
                </Col>
              </Row>
              <form>
                <Row>
                  <Col lg={24}>
                    <div className="title-maps-container">
                      <Input placeholder="Enter your Code Here" className="bg-input"/>
                    </div>
                  </Col>
                </Row>
              </form>
            </Content>
          </Layout>
        );
    }
}

export default CheckOrder;