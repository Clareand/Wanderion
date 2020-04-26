import React, { Component } from 'react';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd'; 
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: 5
        }
    }
    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }
    handlePlus = () => {

        if (this.state.rate < 5) {
            this.setState({
                rate: this.state.rate + 1
            }, () => {
                this.handleCounterChange(this.state.rate);
            })
        }
    }

    handleMin = () => {
        if (this.state.rate > 0) {
            this.setState({
                rate: this.state.rate - 1
            }, () => {
                this.handleCounterChange(this.state.rate);
            })
        }
    }
    render() {
        return (
            <Row>
                <Col sm={3}>
                    <p>Rate Us</p>
                </Col>
                <Col sm={2}>
                    <CaretUpOutlined key="like" onClick={this.handlePlus} />
                </Col>
                <Col sm={2}>
                    <p>{this.state.rate}</p>
                </Col>
                <Col sm={2}>
                    <CaretDownOutlined key="like" onClick={this.handleMin} />
                </Col>
            </Row>
        );
    }
}

export default Counter;