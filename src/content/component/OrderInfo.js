import React, { Component } from 'react'
import axios from 'axios';
import { Layout, Row, Col, Descriptions, Result,Modal } from 'antd'
import { ExclamationCircleOutlined } from "@ant-design/icons"
import { history } from "./../../router/store";
import './../css/style.css';
import ButtonLink from '../layout/ButtonLink';
const{Content,Footer}=Layout;
const { confirm } = Modal;
export default class OrderInfo extends Component {
                 state = {
                   persons: [],
                   status: [],
                   order:[]
                 };
                 componentDidMount() {
                   const user = localStorage.getItem("user");
                   axios
                     .get("http://localhost:8000/api/user/find/" + user)
                     .then(res => {
                       // console.log(res.data);
                       const status = res.data.status;
                       const persons = Object.assign({},res.data.result);
                       const merged = Object.assign(persons[0],persons[0].user)
                       this.setState({ persons: persons[0], status: status });
                       delete this.state.persons.user
                       localStorage.setItem("order", JSON.stringify(this.state.persons));
                     });
                 }
                 showConfirm() {
                   confirm({
                     title: "Do you Want to delete these Order?",
                     icon: <ExclamationCircleOutlined />,
                     onOk() {
                       const user = localStorage.getItem("user");
                       axios
                         .get("http://localhost:8000/api/user/cancel" + user)
                         .then(res => {
                             if(res.data=="success"){
                                history.push("/");
                                window.location.reload(true);
                             }
                         });
                     },
                     onCancel() {
                       console.log("Cancel");
                     }
                   });
                 }
                 handleChange(){
                    history.push("/update");
                    window.location.reload(true);
                 }
                 render() {
                    console.log(this.state.persons);
                   const notFound = require(`../../assets/img/404.png`);
                   let layout;
                   if (this.state.status === "success") {
                     layout = (
                       <Content style={{ overflow: "hidden" }}>
                         {/* {this.state.persons.user.map(persons => ( */}
                           <Row className="section-container">
                             <Col lg={24}>
                               <div className="big-blue title-maps-container">
                                 Order Detail
                               </div>
                             </Col>
                             <Col lg={24}>
                               <div className="sm-blue desc-maps-container">
                                 Dear, {this.state.persons.name} here's your order
                                 information
                               </div>
                             </Col>
                             <br />
                             <br />
                             <br />
                             <br />
                             <Col lg={24} className="border-thick">
                               <div className="row-detail">
                                 <Row>
                                   <Col lg={1}></Col>
                                   <Col lg={7}>
                                     <Row>
                                       <div>
                                         Order Code
                                         <p className="md-blue">
                                           {this.state.persons.order_code}
                                         </p>
                                       </div>
                                     </Row>
                                     <Row>
                                       <div>
                                         From :
                                         <p>
                                           <br />
                                           Wanderion Starmaps <br />
                                           Yogyakarya, Indonesia <br />
                                           +628782748172
                                         </p>
                                       </div>
                                     </Row>
                                   </Col>
                                   <Col lg={7}>
                                     <div className="content-maps-container">
                                       <Row>
                                         <div>
                                           Time Order:
                                           <p>{this.state.persons.created_at}</p>
                                           <br />
                                         </div>
                                       </Row>
                                       <Row>
                                         <div>
                                           Shipping To :
                                           <p>
                                             <br />
                                             {this.state.persons.name}
                                             <br />
                                             {this.state.persons.address}
                                             <br />
                                             {this.state.persons.email}
                                             <br />
                                             {this.state.persons.phone}
                                           </p>
                                         </div>
                                       </Row>
                                     </div>
                                   </Col>
                                   <Col lg={7}>
                                     <div className="content-maps-container">
                                       <Row>
                                         <div>
                                           Payment Status :<p>Not Paid</p>
                                         </div>
                                       </Row>
                                     </div>
                                   </Col>
                                   <Col lg={1}></Col>
                                 </Row>
                               </div>
                             </Col>
                             <br></br>
                               <Col lg={24} className="bg-gray">
                                 <div className="row-detail">
                                   <Row>
                                     <Col lg={1}></Col>
                                     <Col lg={12}>
                                       <p>
                                         Design information
                                         <br />
                                         <br />
                                       </p>
                                     </Col>
                                     <Col lg={5}>
                                       <p>
                                         Amount
                                         <br />
                                         <br />
                                       </p>
                                     </Col>
                                   </Row>
                                   <Row>
                                     <Col lg={1}></Col>
                                     <Col lg={5}>
                                       <div className="maps-box border-thick-black">
                                         <Row>
                                           <div className="maps-box-text md-black">
                                             {this.state.text_line_1}
                                           </div>
                                         </Row>
                                         <Row>
                                           <div className="maps-box-text upper sm-black">
                                             {this.state.persons.text_line_2}
                                           </div>
                                         </Row>
                                         <div className="circle"></div>
                                         <Row>
                                           <div className="maps-box-text md-black">
                                             {this.state.persons.text_line_3}
                                           </div>
                                         </Row>
                                         <Row>
                                           <div className="maps-box-text sm-black">
                                             {this.state.persons.coordinate}
                                           </div>
                                         </Row>
                                       </div>
                                     </Col>
                                     <Col lg={6}>
                                       <Row>
                                         <div>
                                           Design:
                                           <p>{this.state.persons.design}</p>
                                         </div>
                                       </Row>
                                       <Row>
                                         <div>
                                           Galaxy On Maps
                                           <p>{this.state.persons.galaxy}</p>
                                         </div>
                                       </Row>
                                       <Row>
                                         <div>
                                           Moon On Maps
                                           <p>{this.state.persons.moon}</p>
                                         </div>
                                       </Row>
                                     </Col>
                                     <Col>
                                       <Row>
                                         <div className="box-detail">
                                           <p className="lg-bold">
                                             Rp {this.state.persons.price}
                                           </p>
                                         </div>
                                       </Row>
                                     </Col>
                                   </Row>
                                 </div>
                               </Col>
                           </Row>
                         ))}
                         <Row className="section-container">
                           <Col lg={3}></Col>
                           <Col lg={6}>
                             <div className="big-blue title-maps-container">
                               <ButtonLink
                                 text="Print"
                                 background="#000053"
                                 className="btn-md-blue"
                                 onClick={this.handleFormSubmit}
                               />
                             </div>
                           </Col>
                           <Col lg={6}>
                             <div className="big-blue title-maps-container">
                               <ButtonLink
                                 text="Change"
                                 background="#d98200"
                                 className="btn-md-blue"
                                 onClick={this.handleChange}
                               />
                             </div>
                           </Col>
                           <Col lg={6}>
                             <div className="big-blue title-maps-container">
                               <ButtonLink
                                 text="Delete"
                                 background="#960505"
                                 className="btn-md-blue"
                                 onClick={this.showConfirm}
                               />
                             </div>
                           </Col>
                           <Col lg={2}></Col>
                         </Row>
                         <Footer className="starmaps starmaps-footer">
                           Wanderion Starmaps ©2020
                         </Footer>
                       </Content>
                     );
                   } else if (this.state.status === "fail") {
                     layout = (
                       <Content>
                         <Result
                           icon={
                             <img src={notFound} style={{ maxWidth: "30%" }} />
                           }
                           subTitle={
                             <p className="md-blue">Sorry,Data Not Found</p>
                           }
                           extra={
                             <ButtonLink
                               text="Go Back"
                               background="#000053"
                               className="btn-md-blue"
                               href="/check"
                             />
                           }
                         />
                       </Content>
                     );
                   }
                   console.log(this.state.persons);
                   return <Layout className="layout">{layout}</Layout>;
                 }
               }
