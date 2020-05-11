import React, { Component } from 'react'
import { Layout, Row, Col, Table } from 'antd'
import ButtonLink from './../layout/ButtonLink.js';
import { history } from "./../../router/store";
import axios from 'axios'
import './../css/style.css';
import TableOrder from './../layout/TableOrder'
const {Content,Footer}=Layout;
const columns = [
    {
        title: 'Product',
        dataIndex: 'product',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Quantiy',
        dataIndex: 'quantity',
    },
    {
        title: 'Price',
        className:'column-price',
        dataIndex: 'price',
    },
];

const data = [
    {
        key: '1',
        product: 'Starmaps All Black',
        quantity:'1',
        price: 'Rp 200.000,00',
        children: [
            {
                key: 2,
                product: 'Moon Design',
                price: 'Rp 20.000,00',
            }, 
            {
                key: 3,
                product: 'Milkyway',
                price: 'Free',
            }
        ]
    },
    {
        key: 2,
        product: 'Shipping',
        className:'sm-red',
        price: 'Free'
    }

];

export default class Checkout extends Component {
    state={
        map_price:200000,
        moon_price:20000,
        total:0,
        shipping:0,
        galaxy_price:0,
        data:[],
        step1:[]
    };
    totalPrice(moon){
        const map = this.state.map_price;
        const moons = this.state.moon_price;
        const galaxy = this.state.galaxy_price;
        const shipping = this.state.shipping;
        if(moon==1){
            let total = map+shipping+galaxy+moons;
            this.setState({total:total});
        }else{
            let total = map + shipping + galaxy;
            this.setState({ total: total });
        }
    }

    design(data){
        if(data==0){
            return "All Black Starmaps"
        }else if(data==1){
            return "Black on White Starmaps"
        }else{
            return "White on Black Starmaps"
        }
    }

    renderData(design,data){
        if(data.moon==1 && data.galaxy==1){
            const data = [
                {
                    product: design,
                    quantity: '1',
                    price: 'Rp ' +this.state.map_price,
                    children: [
                        {
                            product: 'Moon Design',
                            price: 'Rp '+this.state.moon_price,
                        },
                        {
                            product: 'Milkyway',
                            price: 'Free',
                        }
                    ]
                },
                {
                    product: 'Shipping',
                    className: 'sm-red',
                    price: 'Free'
                }
            ]
            return data;
        }
        else if(data.moon==1){
            const data = [
                {
                    product: design,
                    quantity: '1',
                    price: 'Rp ' +this.state.map_price,
                    children: [
                        {
                            product: 'Moon Design',
                            price: 'Rp ' +this.state.moon_price,
                        }
                    ]
                },
                {
                    product: 'Shipping',
                    className: 'sm-red',
                    price: 'Free'
                }
            ]
            return data;
        }
        else if(data.galaxy==1){
            const data = [
                {
                    product: design,
                    quantity: '1',
                    price: this.state.map_price,
                    children: [
                        {
                            product: 'Milkyway',
                            price: 'Free',
                        }
                    ]
                },
                {
                    product: 'Shipping',
                    className: 'sm-red',
                    price: 'Free'
                }
            ]
            return data;
        }else{
            const data = [
                {
                    product: design,
                    quantity: '1',
                    price: this.state.map_price
                },
                {
                    product: 'Shipping',
                    className: 'sm-red',
                    price: 'Free'
                }
            ]
            return data;
        }
    }
    handleFormSubmit = () => {
        this.state.step1.price = this.state.total
        const data = this.state.step1;
        console.log(data);
        axios
          .post(`http://localhost:8000/api/user/store`, data)
          .then(res => {
              console.log("x", res);
            if (res.data.status === "fail") {
              history.push("/checkout");
              console.log('x',res);
            }else{
                let order = res.data.result
                localStorage.setItem('order', JSON.stringify(order));
                localStorage.removeItem('step-1');
                history.push("/summary");
                window.location.reload(true);
            }
          });
    };
    componentWillMount(){
        let data = JSON.parse(localStorage.getItem("step-1"));
        if(data===null){
            history.push("/notFound");
            window.location.reload(true);
        }else{
            this.totalPrice(data.moon);
            const design = this.design(this.state.design);
            const datas = this.renderData(design, data);
            this.setState({ data: datas, step1: data });
            this.state.step1.price = this.state.total;
        }
        
    }
    render() {
        return (
            <Layout className="layout">
                <Content style={{ overflow: "hidden" }}>
                    <Row className="section-container">
                        <Col lg={24}>
                            <div className="big-blue title-maps-container">
                                Summary
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
                            <div className="content-maps-container">
                                <Table
                                    pagination={false}
                                    columns={columns}
                                    dataSource={this.state.data}
                                    title={() => 'Product List'}
                                    footer={()=>
                                        <Row>
                                            <Col lg={12} className="md-black">Total</Col>
                                            <Col lg={12} className="text-right sm-red">Rp {this.state.total}</Col>
                                        </Row>
                                    }
                                />
                            </div>
                        </Col>
                    </Row>
                    <form onSubmit={this.handleFormSubmit}>
                        <Row className="section-container">
                            <Col lg={24}>
                                <div className="big-blue title-maps-container">
                                    <ButtonLink
                                        text="Checkout"
                                        background="#000053"
                                        className='btn-md-blue'
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
        )
    }
}
