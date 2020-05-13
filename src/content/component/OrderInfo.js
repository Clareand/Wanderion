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
                   order:[],
                   active:''
                 };
                 componentDidMount() {
                   const user = localStorage.getItem("user");
                   axios
                     .get("http://localhost:8000/api/user/find/" + user)
                     .then(res => {
                       console.log(res.data);
                       const status = res.data.status;
                       const persons = Object.assign({},res.data.result);
                       this.setState({ persons: persons[0], status: status });
                       if(res.data.status==='success'){
                          this.state.persons.name = this.state.persons.user.name;
                          this.state.persons.email = this.state.persons.user.email;
                          this.state.persons.phone = this.state.persons.user.phone;
                          this.state.persons.address = this.state.persons.user.address;
                          this.state.persons.postal_code = this.state.persons.user.postal_code;
                          this.state.persons.id_city = this.state.persons.user.id_city;
                          //  this.state.active = this.state.persons.user.active;
                          delete this.state.persons.user;
                          localStorage.setItem("order", JSON.stringify(this.state.persons));
                       }
                     });
                   const moment = require("moment");
                   this.state.dates = moment(this.state.persons.created_at).format("dddd, MMMM Do YYYY");
                   this.design(this.state.persons.design)
                   this.galaxy(this.state.persons.galaxy)
                   this.moon(this.state.persons.moon)
                 }
                  design(data) {
                    if (data == 0) {
                      this.state.design = "All Black Starmaps"
                    } else if (data == 1) {
                      this.state.design = "Black on White Starmaps"
                    } else {
                      this.state.design = "White on Black Starmaps"
                    }
                  }
                  moon(data) {
                    if (data == 0) {
                      this.state.moon = "No"
                    } else {
                      this.state.moon = "Yes"
                    } 
                  }
                  galaxy(data) {
                    if (data == 0) {
                      this.state.galaxy = "No"
                    } else{
                      this.state.galaxy = "Yes"
                    } 
                  }
                 showConfirm() {
                   confirm({
                     title: "Do you Want to delete these Order?",
                     icon: <ExclamationCircleOutlined />,
                     onOk() {
                       const user = localStorage.getItem("user");
                       axios
                         .get("http://localhost:8000/api/user/cancel/" + user)
                         .then(res => {
                           console.log(res.data.status);
                             if(res.data.status==="success"){
                                localStorage.removeItem('order')
                                localStorage.removeItem('user')
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
                    // history.push("/change");
                    // window.location.reload(true);
                 }
                 printPDF(){
                   const user = localStorage.getItem("user");
                   axios
                     .get("http://localhost:8000/api/user/render/" + user)
                 }
                 render() {
                   console.log('a',this.state.persons.name);
                   const notFound = require(`../../assets/img/404.png`);
                   let layout;
                   if (this.state.status === "success") {
                     layout = (
                       <Content style={{ overflow: "hidden" }}>
                         <Row className="section-container">
                           <Col lg={24}>
                             <div className="big-blue title-maps-container">
                               Order Detail
                             </div>
                           </Col>
                           <Col lg={24}>
                             <div className="sm-blue desc-maps-container">
                               Dear, {this.state.persons.user.name} here's your
                               order information
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
                                       <span className="md-black">Order Code</span>
                                       <p className="md-blue">
                                         {this.state.persons.order_code}
                                       </p>
                                     </div>
                                   </Row>
                                   <Row>
                                     <div>
                                       <span className="md-black">From :</span>
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
                                         <span className="md-black">
                                           Time Order:
                                         </span>
                                         <p>{this.state.dates}</p>
                                         <br />
                                       </div>
                                     </Row>
                                     <Row>
                                       <div>
                                         <span className="md-black">
                                           Shipping To :
                                         </span>
                                         <p>
                                           <br />
                                           {this.state.persons.user.name}
                                           <br />
                                           {this.state.persons.user.address}
                                           <br />
                                           {this.state.persons.user.email}
                                           <br />
                                           {this.state.persons.user.phone}
                                         </p>
                                       </div>
                                     </Row>
                                   </div>
                                 </Col>
                                 <Col lg={7}>
                                   <div className="content-maps-container">
                                     <Row>
                                       <div>
                                         <span className="md-black">
                                           Payment Status
                                         </span>
                                         :<p>Not Paid</p>
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
                                 <Col lg={11}>
                                   <p>
                                     <span className="md-black">
                                       <span className="md-black">Design information</span>
                                     </span>
                                     <br />
                                     <br />
                                   </p>
                                 </Col>
                                 <Col lg={4}>
                                   <p>
                                     <span className="md-black">Amount</span>
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
                                         {this.state.persons.text_line_1}
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
                                       <p>{this.state.design}</p>
                                     </div>
                                   </Row>
                                   <Row>
                                     <div>
                                       Galaxy On Maps
                                       <p>{this.state.galaxy}</p>
                                     </div>
                                   </Row>
                                   <Row>
                                     <div>
                                       Moon On Maps
                                       <p>{this.state.moon}</p>
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
                                   <Row className="section-container">
                                     {/* <Col lg={1}></Col> */}
                                     <Col lg={8}>
                                       <div className="big-blue title-maps-container">
                                         <ButtonLink
                                           text="Print"
                                           background="#000053"
                                           className="btn-md-blue"
                                           onClick={this.printPDF}
                                         />
                                       </div>
                                     </Col>
                                     <Col lg={8}>
                                       <div className="big-blue title-maps-container">
                                         <ButtonLink
                                           text="Change"
                                           background="#d98200"
                                           className="btn-md-blue"
                                           href="/change"
                                           onClick={this.handleChange}
                                         />
                                       </div>
                                     </Col>
                                     <Col lg={8}>
                                       <div className="big-blue title-maps-container">
                                         <ButtonLink
                                           text="Delete"
                                           background="#960505"
                                           className="btn-md-blue"
                                           onClick={this.showConfirm}
                                         />
                                       </div>
                                     </Col>
                                     {/* <Col lg={2}></Col> */}
                                   </Row>
                                 </Col>
                               </Row>
                             </div>
                           </Col>
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
