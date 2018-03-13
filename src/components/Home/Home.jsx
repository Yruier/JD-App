import React, { Component } from 'react';
import Swiper from "./Swiper/index";
import Nav from './Nav/index';
import Banner from './Banner/index';
import List from './List/index';
import './Home.css';

class Home extends Component{
    render(){
        return (
            <div>
                <Swiper/>
                 <Nav/>
                 <Banner/>
                 <List/>
            </div>
        )
    }
}

export default Home;
