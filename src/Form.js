import React, { Component } from 'react';
import logo from './logo.svg'
import './App.css'

class Form extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div class="container">
            <div class="form-group col-md-2">
                    <label for="mhs-select"></label>
                    <select name="" id="mhs-select" class="form-control">
                        <option value="semua">Semua</option>
                    </select>
                </div>
            <table class="table table-hover table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody id="mhs-body">
                    <tr>
                        <td colspan="2">Data Tidak Ditemukan</td>
                    </tr>
                </tbody>
            </table>
    </div>
        );
    }
}

export default Form;