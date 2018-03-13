import React, { Component } from 'react';
import { WingBlank, Carousel } from "antd-mobile";
import './Banner.css';

class Banner extends Component{
    state = {
        data: ['1', '2', '3', '4'],
        imgHeight: 176,
        slideIndex: 0,
    }
    render(){
        return (
            <div className='home-banner'>
                <div className='banner'><img alt='' src={require('../../../images/banner.jpg')}/></div>
                <div className='banner-news'>
                    <div className='banner-left'><img src={require('../../../images/jd-news-tit.png')} alt=''/></div>
                    <div className='banner-center'>
                    <WingBlank>
                        <Carousel className="banner-carousel"
                                vertical
                                dots={false}
                                dragging={false}
                                swiping={false}
                                autoplay
                                infinite
                                >
                            <div className="v-item">carousel 1</div>
                            <div className="v-item">carousel 2</div>
                            <div className="v-item">carousel 3</div>
                        </Carousel>
                    </WingBlank>
                    </div>
                    <div className='banner-right'>更多</div>
                </div>
            </div>
        )
    }
}

export default Banner;
