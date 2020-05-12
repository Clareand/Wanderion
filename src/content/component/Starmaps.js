import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd'; 
import './../css/starmaps.css';
import CardFeature from './../layout/CardFeature';
import Counter from './../layout/Counter';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import axios from "axios";
const { Content, Footer } = Layout; 
const feature=[
  {
        image: require('./../../assets/icon/magic-wand.png'),
        text: 'Every maps design can be added by your own words or notes. Each of maps  is unique, just like you',
        title: 'Personalized'
  }  
  ,{
        image:require('./../../assets/icon/frame.png'),
        text:'There is a few design we offer and 2 media to print your maps. Every maps crafted carefully',
        title:'Design'
    },
  {
        image: require('./../../assets/icon/box.png'),
        text: 'We carefully ship your maps with beautiful and solid packaging, making sure it safe to your hand',
        title:'Packaging'
  }
 
]

class Starmaps extends Component {
  state={
    rate:5,
    graph:[]
  }
  handleCounterChange=(newValue)=>{
    this.setState({
      rate:newValue
    })
  }
  componentWillMount(){
    
     axios.get("http://localhost:8000/api/user/best").then(res => {
       const graph = res.data;
       this.setState({ graph: graph });
      //  console.log(graph)
     });
  
  }

  componentDidMount(){
    // Create chart instance
    let chart = am4core.create(
      "chartdiv",
      am4charts.XYChart
    );

    // Add data
    chart.data = this.state.graph
    console.log('a',chart.data);
    // Create axes
    let categoryAxis = chart.xAxes.push(
      new am4charts.CategoryAxis()
    );
    categoryAxis.dataFields.category = "design";
    categoryAxis.title.text = "Design";

    let valueAxis = chart.yAxes.push(
      new am4charts.ValueAxis()
    );
    valueAxis.title.text = "Amount";

    // Create series
    let series = chart.series.push(
      new am4charts.ColumnSeries()
    );
    series.dataFields.valueY = "amount";
    series.dataFields.categoryX = "design";
    series.name = "Best Seller";
    series.columns.template.tooltipText =
      "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    series.columns.template.fill = am4core.color("#104547"); // fill
  }
 
    render() {
      const img = require('../../assets/icon/telescope.png');
        return (
          <Layout className="starmaps">
            <Content style={{ overflow: "hidden" }}>
              <Row className="section-container">
                <Col lg={24}>
                  <div className="big-blue title-maps-container">
                    What is Starmaps?
                  </div>
                </Col>
                <Col lg={24}>
                  <div className="sm-blue desc-maps-container">
                    This is not just an art, it's a memory of yours
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
                  <div className="content-maps-container md-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam non justo vel est maximus pellentesque ac sit amet ex.
                    Ut at sapien in nulla luctus laoreet. Etiam vestibulum,
                    tellus in tincidunt dapibus, lacus tellus malesuada nibh, ac
                    malesuada quam neque ac leo. Sed id dui nec libero facilisis
                    tempus nec at ipsum. Pellentesque fringilla molestie libero,
                    in facilisis leo ultrices vitae. Proin elementum cursus nisl
                    nec commodo. Integer tempus, augue non finibus viverra, elit
                    odio viverra nulla, sit amet vulputate metus nulla sed urna.
                    Praesent a varius neque, non tincidunt leo. Morbi turpis
                    metus, rutrum non venenatis vel, rhoncus eget nisi. Praesent
                    vel tellus venenatis, ultrices dui non, rutrum est. Donec
                    feugiat ut ex nec vulputate.
                  </div>
                </Col>
                <Col lg={24}>
                  <div className="md-blue title-maps-container">Highlight</div>
                </Col>
                <Col lg={24}>
                  <div className="card-feature">
                    <Row gutter={[16, 16]}>
                      {feature.map(data => (
                        <Col span={8}>
                          <CardFeature
                            hoverable={true}
                            image={data.image}
                            className="card-content"
                            text1={data.title}
                            text2={data.text}
                          />
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Col>
                <Col lg={24}>
                  <div className="md-blue title-maps-container">
                    Map Accuracy Rate
                  </div>
                </Col>
                <Col lg={24}>
                  <div className="content-maps-container-mid">
                    <img className="mid" src={img}></img>
                    <p className="mid md-blue">{this.state.rate}/5</p>
                  </div>
                </Col>
                {/* <Col lg={24}>
                  <div className="counter-container">
                    <Counter onCounterChange={(newValue)=>this.handleCounterChange(newValue)} />
                  </div>
                </Col> */}
                <Col lg={24}>
                  <div className="md-blue title-maps-container">
                    Best Sellers
                  </div>
                </Col>
                <Col lg={24}>
                  <div id="chartdiv"></div>
                  <div className="md-blue title-maps-container">
                    Here gonna be graphic
                  </div>
                </Col>
              </Row>
            </Content>
            <Footer className="starmaps starmaps-footer">
              Wanderion Starmaps ©2020
            </Footer>
          </Layout>
        );
    }
}

export default Starmaps;