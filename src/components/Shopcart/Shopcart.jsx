import React, { Component } from 'react';
import Shopcartgoods from "./Shopcartgoods/index";
import Sumprice from './Sumprice/index';
import './Shopcart.css';

class Shopcart extends Component{
    render(){
        return (
            <div className='app-shopcart'>
                <Shopcartgoods/>
                <Sumprice/>
            </div>
        )
    }
}


export default Shopcart;

