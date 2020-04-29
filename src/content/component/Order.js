import React, { Component } from 'react';
import { Layout, Row, Col, Input, Select, AutoComplete,DatePicker, Radio, TimePicker } from "antd";
import CardImg from "./../layout/CardImg";
import './../css/style.css';
import moment from "moment";
const { Content, Footer } = Layout; 
const { Option } = Select;
const { TextArea } = Input;

const Design = [
  {
    image: require("./../../assets/img/BoW.png"),
    value: "0",
    title: "All Black",
    text: "Black design with frame Black"
  },
  {
    image: require("./../../assets/img/WoB.png"),
    value: "1",
    title: "Black on White",
    text: "Black design with frame White"
  },
  {
    image: require("./../../assets/img/BoW.png"),
    value: "2",
    title: "White on Black",
    text: "White design with frame Black"
  }
];

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}
function onChanged(date, dateString) {
  console.log(date, dateString);
}

class Order extends Component {   
    render() {
        const img1 = require(`../../assets/img/frame_layout.png`);
        return (
          <Layout className="layout">
            <Content style={{ overflow: "hidden" }}>
              <Row className="section-container">
                <Col lg={24}>
                  <div className="big-blue title-maps-container">
                    Frame Layout
                  </div>
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
                          Here's example of frame layout. You can add text as
                          you want in place we given
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
              <form>
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
                                placeholder="Enter your name"
                                className="form"
                              />
                            </div>
                            <div className="input-line">
                              <label>Email</label>
                              <Input
                                placeholder="Enter your Email"
                                className="form"
                              />
                            </div>
                            <div className="input-line">
                              <label>Phone</label>
                              <Input
                                placeholder="Enter your phone"
                                className="form"
                              />
                            </div>
                          </div>
                        </Col>
                        <Col span={2}></Col>
                        <Col span={10}>
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
                                  onChange={onChange}
                                  onFocus={onFocus}
                                  onBlur={onBlur}
                                  onSearch={onSearch}
                                  filterOption={(input, option) =>
                                    option.children
                                      .toLowerCase()
                                      .indexOf(input.toLowerCase()) >= 0
                                  }
                                >
                                  <Option value="jack">Yogyakarta</Option>
                                  <Option value="lucy">Jakarta</Option>
                                  <Option value="tom">Bali</Option>
                                </Select>
                              </Input.Group>
                            </div>
                          </div>
                          <div className="input-line">
                            <label>Address</label>
                            <TextArea
                              className="form"
                              rows={4}
                              placeholder="Enter your address"
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
                        <Radio.Group>
                          <Row gutter={[48, 16]}>
                            {Design.map(data => (
                              <Col span={8}>
                                <CardImg
                                  hoverable={true}
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
                        <Col span={24}>
                          <Row gutter={24}>
                            <Col lg={6}>
                              <div className="input-line">
                                <label>Coordinate</label>
                                <Input
                                  placeholder="Enter place coordinate"
                                  className="form"
                                />
                              </div>
                            </Col>
                          </Row>
                          <Row gutter={[24]}>
                            <Col lg={3}>
                              <div className="input-line">
                                <label>Date</label>
                                <br />
                                <DatePicker onChange={onChanged} />
                              </div>
                            </Col>
                            <Col lg={3}>
                              <div className="input-line">
                                <label>Time</label>
                                <br />
                                <TimePicker
                                  use12Hours
                                  format="h:mm:ss A"
                                  onChange={onChange}
                                  style={{ width: 140 }}
                                />
                              </div>
                            </Col>
                            <Col lg={6}>
                              <div className="input-line">
                                <label>Time Format</label>
                                <br />
                                <Radio.Group>
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
                            <Col lg={3}>
                              <div className="input-line">
                                <label>Add Moon Phase</label>
                                <br />
                                <Radio.Group>
                                  <Radio.Button value="0">No</Radio.Button>
                                  <Radio.Button value="1">Yes</Radio.Button>
                                </Radio.Group>
                              </div>
                            </Col>
                            <Col lg={3}>
                              <div className="input-line">
                                <label>Add Galaxy</label>
                                <br />
                                <Radio.Group>
                                  <Radio.Button value="0">No</Radio.Button>
                                  <Radio.Button value="1">Yes</Radio.Button>
                                </Radio.Group>
                              </div>
                            </Col>
                            <Col lg={3}>
                              <div className="input-line">
                                <label>Moon design</label>
                                <br />
                                <Radio.Group>
                                  <Radio.Button value="0">No</Radio.Button>
                                  <Radio.Button value="1">Yes</Radio.Button>
                                </Radio.Group>
                              </div>
                            </Col>
                          </Row>
                          <div></div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </form>
            </Content>
          </Layout>
        );
    }
}

export default Order;