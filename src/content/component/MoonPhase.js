import React, { Component, useEffect } from 'react';
import './../css/style.css';
import { Layout, Row, Col, Input, DatePicker } from 'antd';
import CardImg from "./../layout/CardImg";
import ButtonLink from './../layout/ButtonLink.js';
import { history } from "./../../router/store";
import Moment from 'react-moment';
import axios from "axios";
const { Content,Footer } = Layout; 
class MoonPhase extends Component {
  state = {
    date: "",
    dateNow:"",
    dateTmp:"",
    phase: "",
    id: "",
  };
  onChanged = (dateString) => {
    const moment = require("moment");
    let now = moment(dateString).format("DD-MM-YYYY");
    let dateNow = moment(dateString).format("dddd, MMMM Do YYYY");
    // const date = now.format("DD-MM-YYYY H:mm:s");
    // const dates = dateString;
    this.setState({ date: now,dateTmp:dateNow});
    console.log('a',this.state.date);
  }
    handleSubmit=()=> {
    console.log('tes');
    let dates = this.state.date;
    let dateNow = this.state.dateTmp;
    console.log('b',dates);
    localStorage.setItem("dates", dates);
    localStorage.setItem("dateNow", dateNow);
    history.push('/moonPhase')
    window.location.reload(true);
  }
  pathUri = (id)=>{
    switch (id) {
      case 0:
        return require("./../../assets/moon/0.png");
      case 1:
        return require("./../../assets/moon/1.png");
      case 2:
        return require("./../../assets/moon/2.png");
      case 3:
        return require("./../../assets/moon/3.png");
      case 4:
        return require("./../../assets/moon/4.png");
      case 5:
        return require("./../../assets/moon/5.png");
      case 6:
        return require("./../../assets/moon/6.png");
      case 7:
        return require("./../../assets/moon/7.png");
    }
  }
  emptyDate(){
    const moment = require("moment");
    let now = moment();
    const date = now.format("DD-MM-YYYY");
    const dateNow = now.format("dddd, MMMM Do YYYY");
    console.log('d',date);
    return date
  }
  componentDidMount(){
    let date = localStorage.getItem("dates");
    let dateNow = localStorage.getItem("dateNow");
    console.log('g',dateNow);
    console.log('c',date);
    if (date === null && dateNow===null) {
      // date = this.emptyDate();
       const moment = require("moment");
       let now = moment();
       date = now.format("DD-MM-YYYY");
       dateNow = now.format("dddd, MMMM Do YYYY");
       console.log("d", date);
      console.log('e',date);
    }
    axios
      .post(`http://localhost:8000/api/user/moonPhase`, { date })
      .then(res => {
        const phase = res.data.result.phase.name;
        const id = res.data.result.phase.id;
        this.setState({ phase: phase, id: id, date: date, dateNow: dateNow });
        console.log('f',this.state.dateNow);
      });
  }
  render() {
    const path = this.pathUri(this.state.id);
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
            <br />
            <br />
            <br /> <br />
            <Col lg={24}>
              <Row gutter={[48, 16]}>
                <Col span={9}>
                  <div className="content-datepicker">
                    <form>
                      {/* onSubmit={this.handleSubmit} */}
                      <Row gutter={[16, 16]}>
                        <Col>
                          <div className="input-line sm-blue">
                            <label>
                              Insert a date from beautiful moment of yours.
                            </label>
                            <br />
                            <br />
                            <DatePicker
                              onChange={this.onChanged}
                              className="input-line"
                            />
                            <br />
                            <br />
                            <ButtonLink
                              text="Find!"
                              background="#000053"
                              className="btn-find"
                              onClick={this.handleSubmit}
                              // htmlType="submit"
                              href="/moonPhase"
                            />
                          </div>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </Col>
                <Col span={8}>
                  <CardImg
                    hoverable={true}
                    image={path}
                    alt="image"
                    className="card-img moon"
                    title={<p className="-title space">{this.state.phase}</p>}
                    text1={<p className="-text">{this.state.dateNow}</p>}
                    bordered={false}
                  />
                </Col>
                <Col span={8}></Col>
              </Row>
            </Col>
          </Row>
        </Content>
        <Footer className=" starmaps starmaps-footer">
          Wanderion Starmaps ©2020
        </Footer>
      </Layout>
    );
  }
}

export default MoonPhase;