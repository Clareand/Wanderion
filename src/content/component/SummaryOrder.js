import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'
import { history } from "./../../router/store";
import axios from 'axios'
import ButtonLink from "./../layout/ButtonLink.js";
import './../css/style.css';
const { Content,Footer } = Layout; 
export default class SummaryOrder extends Component {
                 state = {
                   data: [],
                   status: []
                 };
                 componentDidMount() {
                   let data = JSON.parse(localStorage.getItem("order"));
                   this.setState({ data: data });
                   console.log(data);
                 }
                 renderPdf = () => {
                  const user = localStorage.getItem("user");
                  axios.get("http://localhost:8000/api/user/render/" + user);
                 };

                 render() {
                   return (
                     <Layout className="layout">
                       <Content style={{ overflow: "hidden" }}>
                         <Row className="section-container">
                           <Col lg={24}>
                             <div className="big-blue title-maps-container">
                               Payment Process
                             </div>
                           </Col>
                           <Col lg={24}>
                             <hr
                               style={{
                                 minHeight: 5,
                                 backgroundColor: "#000068",
                                 border: "none",
                                 maxWidth: 150,
                                 borderRadius: 20
                               }}
                             />
                           </Col>
                           <Col lg={24}>
                             <div className="sm-blue desc-maps-container">
                               Thanks for ordering our product, here your code
                             </div>
                           </Col>
                           <Col lg={24}>
                             <div className="md-blue-bold title-maps-container">
                               {this.state.data.order_code}
                             </div>
                             <div className="sm-blue desc-maps-container">
                               Order Amount :{" "}
                               <span className="sm-red">
                                 Rp {this.state.data.price}
                               </span>
                             </div>
                           </Col>
                           <Col lg={24}>
                             <div className="content-summary-container md-black">
                               We will work on your order after the payment
                               process success. Your Maps will be ready in one
                               week after the payment and we will ship the
                               package to you in the day 7th. You can change
                               your order or cancel the order if you haven't
                               paid it yet. Go check More from us and hit
                               change/cancel.
                             </div>
                           </Col>
                         </Row>
                         <Row className="section-container">
                           <Col lg={24}>
                             <div className="big-blue title-maps-container">
                               <ButtonLink
                                 text="Download"
                                 background="#000053"
                                 className="btn-md-blue"
                                 onClick={this.renderPdf}
                               />
                             </div>
                           </Col>
                         </Row>
                       </Content>
                       <div className="br-div"></div>
                       <Footer className="starmaps starmaps-footer">
                         Wanderion Starmaps ©2020
                       </Footer>
                     </Layout>
                   );
                 }
               }
