import React, { Component } from 'react'
import { Layout, Row, Col, Table } from 'antd'
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
                                    columns={columns}
                                    dataSource={data}
                                    title={() => 'Product List'}
                                    footer={()=>
                                        <Row>
                                            <Col lg={12} className="md-black">Total</Col>
                                            <Col lg={12} className="text-right sm-red">Rp 200.000,00</Col>
                                        </Row>
                                    }
                                />
                            </div>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}
