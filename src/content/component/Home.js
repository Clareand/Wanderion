import React from 'react';
import { Layout, Row, Col } from 'antd';
import './../css/Home.css';
import Header from './../layout/Header.js';
import ButtonLink from './../layout/ButtonLink.js';
import { InstagramOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Content, Footer } = Layout;
class Home extends React.Component {
    render() {
        const img1 = require(`../../assets/img/orion-hand.jpg`);
        return (
            <div>
                <Layout className="layout">
                    <Content style={{overflow:"hidden"}}>
                        <Row className="section-container">
                            <Col lg={12} md={12} sm={12}>
                                <div className="image-container">
                                    <img
                                    src={img1}
                                    alt="orion"
                                    style={{maxWidth:'100%'}}
                                    />
                                </div>
                            </Col>
                            <Col lg={12} md={12} sm={12}>
                                <Row>
                                    <Col span={24}>
                                        <div className="title-container">
                                            <br/>
                                            <span className="big-bold-blue">Wanderion</span>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <div className="desc-container">
                                            <span className="small-blue">Where stars aligned above your precious Memory</span>
                                            <br/>
                                            Find us on:
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className="btn-1-container">
                                            <ButtonLink
                                                text="Instagram"
                                                icon={<InstagramOutlined/>}
                                                background="#000053"
                                                className='button-link'
                                                href='https://www.instagram.com/wanderionproject/'
                                            />
                                            <ButtonLink
                                                text="Order Now!"
                                                background="fff"
                                                textColor="#000"
                                                marginLeft={16}
                                                border="1px solid #000053"
                                                className='button-link'
                                                href={<Link to="/order"></Link>}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default Home;