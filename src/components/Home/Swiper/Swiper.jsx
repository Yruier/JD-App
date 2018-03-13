import React, { Component } from 'react';
import { WingBlank, Carousel } from "antd-mobile";
import './Swiper.css';

class Swiper extends Component{
    state = {
        data: ['1', '2', '3', '4'],
        imgHeight: 176,
        slideIndex: 0,
    }
    render(){
        return (
            <div>
                <WingBlank>
                    <Carousel autoplay infinite selectedIndex={1}>
                        {this.state.data.map(val => (
                            <a key={val}
                                href="javascript:;"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img src={require(`../../../images/ban${val}.jpg`)}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
            </div>
        )
    }
}

export default Swiper;
