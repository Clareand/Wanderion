import React, { Component } from "react";
import {
  Layout,
  Row,
  Col,
  Input,
  Select,
  AutoComplete,
  DatePicker,
  Radio,
  TimePicker
} from "antd";
import CardImg from "./../layout/CardImg";
import ButtonLink from "./../layout/ButtonLink.js";
import "./../css/style.css";
import moment from "moment";
import axios from "axios";
import { history } from "./../../router/store";
const { Content, Footer } = Layout;
const { Option } = Select;
const { TextArea } = Input;

const Design = [
  {
    image: require("./../../assets/img/BoW.png"),
    value: "0",
    title: "All Black",
    text: "Black design with Black Frame"
  },
  {
    image: require("./../../assets/img/WoB.png"),
    value: "1",
    title: "Black on White",
    text: "Black design with White Frame"
  },
  {
    image: require("./../../assets/img/BoW.png"),
    value: "2",
    title: "White on Black",
    text: "White design with Black Frame"
  }
];
function onSearch(val) {
  console.log("search:", val);
}
function onOk(value) {
  console.log("onOk: ", value);
}
class Update extends Component {
  state = {
    cities: [],
  };
  componentDidMount() {
    axios.get("http://localhost:8000/api/city").then(res => {
      console.log(res.data);
      const city = res.data.result;
      this.setState({ cities: city });
    });
  }
  componentWillMount() {
    let data = JSON.parse(localStorage.getItem("order"));
    console.log('a',data);
    if (data != null) {
        const keys = Object.keys(data);
        const vals = Object.values(data);
        for (let i = 0; i < keys.length; i++) {
          this.setState({ [keys[i]]: vals[i] });
        }
        this.reversingFormat(data.date);
      }
    }
  handleChange = event => {
    const input = event.target;
    const value = input.value;
    this.setState({ [input.name]: value });
  };
  handleFormSubmit = () => {
    delete this.state.date
    const moment = require("moment");
    let dates = moment(this.state.date).format("YYYY-MM-DD HH:mm:ss");
    this.setState({ date: dates });
    this.state.date = dates;
    delete this.state.cities;
    delete this.state.dates;
    delete this.state.updated_at
    localStorage.setItem("order", JSON.stringify(this.state));
    // history.push("/confirmChange");
    // window.location.reload(true);
    // console.log(this.state);
  };
  onChangeCity = city => {
    this.setState({ id_city: city });
  };
  onChangeDate = dateString => {
    console.log("c", dateString);
    const moment = require("moment");
    let dates = moment(dateString);
    let date = moment(dateString).format("DD-MM-YYYY HH:mm:ss");
    this.setState({ dates: dates, date: date });
    console.log("d", this.state.date);
  };
  reversingFormat(date) {
    const moment = require("moment");
    let dates = moment(date);
    this.setState({ dates: dates });
    console.log("e", date);
  }
  render() {
    // console.log('b', this.state.galaxy.toString());
    const img1 = require(`../../assets/img/frame_layout.png`);
    return (
      <Layout className="layout">
        <Content style={{ overflow: "hidden" }}>
          <Row className="section-container">
            <Col lg={24}>
              <div className="big-blue title-maps-container">Frame Layout</div>
            </Col>
            <Col lg={24}>
              <Row gutter={[8, 8]}>
                <Col span={8}></Col>
                <Col span={8}>
                  <img
                    className="center"
                    src={img1}
                    alt="Frame layout"
                    style={{ maxWidth: "90%" }}
                  />
                  <div className="center">
                    <p>
                      Here's example of frame layout. You can add text as you
                      want in place we given
                    </p>
                  </div>
                </Col>
                <Col span={8}></Col>
              </Row>
            </Col>
            <Col lg={24}>
              <div className="md-blue title-maps-container">
                Please Fill this form
              </div>
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
          </Row>
          <form >
            {/* onSubmit={this.handleFormSubmit} */}
            <Row>
              <Col lg={24}>
                <div className="content-maps-container md-black">
                  <p className="sm-blue">1. Self Identity</p>
                  <Row gutter={[24]}>
                    <Col span={1}></Col>
                    <Col span={10}>
                      <div>
                        <div className="input-line">
                          <label>Name</label>
                          <Input
                            value={this.state.name}
                            placeholder="Enter your name"
                            className="form"
                            onChange={this.handleChange}
                            name="name"
                          />
                        </div>
                        <div className="input-line">
                          <label>Email</label>
                          <Input
                            value={this.state.email}
                            placeholder="Enter your Email"
                            className="form"
                            name="email"
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="input-line">
                          <label>Phone</label>
                          <Input
                            value={this.state.phone}
                            placeholder="Enter your phone"
                            className="form"
                            name="phone"
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="input-line">
                          <label>City</label>
                          <div>
                            <Input.Group>
                              <Select
                                className="form"
                                showSearch
                                style={{ width: "100%" }}
                                placeholder="Select City"
                                optionFilterProp="children"
                                onChange={this.onChangeCity}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                  option.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                                }
                                value={this.state.id_city}
                                name="id_city"
                              >
                                {this.state.cities.map(city => (
                                  <Option value={city.id_city}>
                                    {city.city_name}
                                  </Option>
                                ))}
                              </Select>
                            </Input.Group>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={10}>
                      <div className="input-line">
                        <label>Address</label>
                        <TextArea
                          value={this.state.address}
                          name="address"
                          className="form"
                          rows={5}
                          placeholder="Enter your address"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="input-line non-justify">
                        <label>Postal Code</label>
                        <Input
                          value={this.state.postal_code}
                          name="postal_code"
                          placeholder="Enter your postal code"
                          className="form"
                          onChange={this.handleChange}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={24}>
                <div className="content-maps-container md-black">
                  <p className="sm-blue">2. Choose Design</p>
                  <div className="form-center">
                    <Radio.Group
                      className="wrap"
                      name="design"
                      value={this.state.design.toString()}
                      onChange={this.handleChange}
                    >
                      <Row gutter={[48, 16]}>
                        {Design.map(data => (
                          <Col lg={8}>
                            <CardImg
                              image={data.image}
                              className="card-img"
                              text1={<p className="-title">{data.text}</p>}
                              bordered={false}
                              content={
                                <Radio.Button value={data.value}>
                                  {data.title}
                                </Radio.Button>
                              }
                            />
                          </Col>
                        ))}
                      </Row>
                    </Radio.Group>
                  </div>
                </div>
              </Col>
              <Col lg={24}>
                <div className="content-maps-container md-black">
                  <p className="sm-blue">3. Detail Order</p>
                  <Row gutter={[24]}>
                    <Col span={12}>
                      <Row gutter={24}>
                        <Col lg={12}>
                          <div className="input-line">
                            <label>Coordinate</label>
                            <Input
                              value={this.state.coordinate}
                              placeholder="Enter place coordinate"
                              className="form"
                              name="coordinate"
                              onChange={this.handleChange}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row gutter={[24]}>
                        <Col span={12}>
                          <div className="input-line">
                            <label>Date</label>
                            <br />
                            <DatePicker
                              showTime
                              onChange={this.onChangeDate}
                              value={this.state.dates}
                              onOk={onOk}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row gutter={[24]}>
                        <Col lg={6}>
                          <div className="input-line">
                            <label>Time Format</label>
                            <br />
                            <Radio.Group
                              name="time_format"
                              onChange={this.handleChange}
                              value={this.state.time_format.toString()}
                            >
                              <Radio.Button value="0">
                                24 hours format
                              </Radio.Button>
                              <Radio.Button value="1">
                                12 hours format
                              </Radio.Button>
                            </Radio.Group>
                          </div>
                        </Col>
                      </Row>
                      <Row gutter={[24]}>
                        <Col lg={6}>
                          <div className="input-line">
                            <label>Moon Phase</label>
                            <br />
                            <Radio.Group name="moon" onChange={this.handleChange} value={this.state.moon.toString()}>
                              <Radio.Button value="0">No</Radio.Button>
                              <Radio.Button value="1">Yes</Radio.Button>
                            </Radio.Group>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="input-line">
                            <label>Galaxy Image</label>
                            <br />
                            <Radio.Group
                              name="galaxy"
                              onChange={this.handleChange}
                              value={this.state.galaxy.toString()}
                            >
                              <Radio.Button value='0'>No</Radio.Button>
                              <Radio.Button value='1'>Yes</Radio.Button>
                            </Radio.Group>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <div className="input-line non-justify">
                        <label>Text 1</label>
                        <TextArea
                          value={this.state.text_line_1}
                          className="form"
                          rows={5}
                          placeholder="Dear or Belongs to"
                          name="text_line_1"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="input-line non-justify">
                        <label>Text 2</label>
                        <TextArea
                          value={this.state.text_line_2}
                          className="form"
                          rows={5}
                          placeholder="Name/initial Your beloved"
                          name="text_line_2"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="input-line non-justify">
                        <label>Text 3</label>
                        <TextArea
                          value={this.state.text_line_3}
                          className="form"
                          rows={5}
                          placeholder="Foot Note from yours"
                          name="text_line_3"
                          onChange={this.handleChange}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row className="section-container">
              <Col lg={24}>
                <div className="big-blue title-maps-container">
                  <ButtonLink
                    text="Next"
                    background="#000053"
                    className="btn-md-blue"
                    // htmlType="submit"
                    href="/confirmChange"
                    onClick={this.handleFormSubmit}
                  />
                </div>
              </Col>
            </Row>
          </form>
        </Content>
        <Footer className=" starmaps starmaps-footer">
          Wanderion Starmaps ©2020
        </Footer>
      </Layout>
    );
  }
}

export default Update;
