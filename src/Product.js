import React, { Component } from 'react';
import logo from './logo.svg'
import './App.css'

class Product extends Component{
    render(){
        return (
            <div className={this.props.className}>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>{this.props.judul}</h1>
                <h3>Harga : Rp. {this.props.harga}</h3>
            </div>
        );
    }
}

export default Product;