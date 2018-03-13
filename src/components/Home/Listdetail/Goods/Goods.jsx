import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addToShopcartAction from '../../../../store/action/addToShopcart';
import './Goods.css';

@withRouter
class Goods extends Component{
    constructor(props){
        super(props)
        this.state={
            shopcartData:[]
        }
    }
    addShopcart(){
        const {dispatch,data} = this.props;
        dispatch(addToShopcartAction(data))
        
        this.forceUpdate(); 
    }
    goToShopcart(){
        const {history}=this.props;
        history.push('/shopcart');
    }
    render(){
        const { imageurl, jdPrice, wname } = this.props.data;
        return (
            <div className='detail-goods'>
                <div>
                    <img className='goods-img' src={imageurl} alt=''/>
                    <div>{wname}</div>
                    <div>￥<span>{jdPrice}</span></div>
                </div>
                <div className='add-shopcart'>
                    <span>卖家</span>
                    <span>进店</span>
                    <span onClick={this.goToShopcart.bind(this)}>
                        购物车
                        ({this.props.shopcartData.length})
                    </span>
                    <span onClick={this.addShopcart.bind(this)}>加入购物车</span>
                    <span>立即购买</span>
                </div>
            </div>
        )
    }
}

Goods.propTypes={
    imageurl: PropTypes.string,
    jdPrice: PropTypes.string,
    wname: PropTypes.string
}

const mapStateToType = (state,ownProps) => {
    return {
        shopcartData:state.shopcartData.shopcartData
    }
}
export default connect(mapStateToType)(Goods);