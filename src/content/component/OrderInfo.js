import React, { Component } from 'react'
import axios from 'axios';
import { Layout, Row, Col, Descriptions, Result } from 'antd'
import './../css/style.css';
import ButtonLink from '../layout/ButtonLink';
const{Content,Footer}=Layout;
// const UserInfo=[
//     {
//         name    :"Stjarna Moon",
//         address :"Orchid Road No 19, Jababeka, Indonesia",
//         phone   :"08982948181"
//     }
// ];
export default class OrderInfo extends Component {
    state = {
        persons: [],
        status:[],
    }
    componentDidMount() {
        const user = localStorage.getItem('user');
        axios.get("http://localhost:8000/api/user/find/" + user)
            .then(res => {
                // console.log(res.data);
                const status = res.data.status;
                const persons = res.data.result;
                this.setState({ persons:persons,status:status });
            })
    }
    render() {
        const notFound = require(`../../assets/img/404.png`);
        let layout;
        if(this.state.status==='success'){
            layout = <Content style={{ overflow: "hidden" }}>
                {this.state.persons.map(person => (
                    <Row className="section-container">
                        <Col lg={24}>
                            <div className="big-blue title-maps-container">
                                Order Information
                            </div>
                        </Col>
                        <Col lg={24}>
                            <div className="sm-blue desc-maps-container">
                                Dear, {person.name} here's your order information
                            </div>
                        </Col>
                        <Col lg={24}>
                            <div className="content-maps-container">
                                <Descriptions title="Detail">
                                    <Descriptions.Item label="Telephone">{person.phone}</Descriptions.Item>
                                    <Descriptions.Item label="Ship to">{person.address}</Descriptions.Item>
                                </Descriptions>
                            </div>
                        </Col>
                    </Row>
                ))}
            </Content>
        }else if(this.state.status==='fail'){
            layout = <Content >
                <Result
                    icon={
                        <img
                            src={notFound}
                            style={{ maxWidth: '30%' }}
                        />
                    }
                    subTitle={
                        <p className="md-blue">Sorry,Data Not Found</p>
                    }
                    extra={
                        <ButtonLink
                            text="Go Back"
                            background="#000053"
                            className='btn-md-blue'
                            href='/check'
                        />
                    }
                />
            </Content>
        }
        console.log(this.state.status);
        return (
            <Layout className="layout">
                {layout}
            </Layout>
        )
    }
}
