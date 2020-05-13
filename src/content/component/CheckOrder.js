import React, { Component } from 'react';
import './../css/style.css';
import { Layout, Row, Col, Input } from 'antd';
import ButtonLink from './../layout/ButtonLink.js';
const { Content, Footer } = Layout; 
class CheckOrder extends Component {
  state = {
    user: ''
  };
  handleChange = (event) => {
    const input = event.target; 
    const value = input.value;
    this.setState({ [input.name]: value });
  };
  handleFormSubmit = () => { 
    const { user } = this.state;
    localStorage.setItem('user', user);
  };
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
                {/* onSubmit={this.handleFormSubmit} action="/info" */}
                <Row>
                  <Col lg={24}>
                    <div className="title-maps-container">
                      <Input name="user" placeholder="Enter your Code Here" className="bg-input" value={this.state.user} onChange={this.handleChange}/>
                    </div>
                  </Col>
                  <Col lg={24}>
                    <div className="title-maps-container">
                      <ButtonLink
                        text="Find Order!"
                        background="#000053"
                        className='btn-bg-blue'
                        href="/info"
                        onClick={this.handleFormSubmit}
                        // htmlType='submit'
                      />
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