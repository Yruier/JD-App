import React, { Component } from 'react';
// import emitter from '../../../utils/events/index'
import PubSub from 'pubsub-js';  // 同级或兄弟组件之间通信
import { connect } from "react-redux";
import './Sumprice.css';

class Sumprice extends Component{

    constructor(props){
        super(props)
        this.state={
            checkAll:[]
        }
    }

    componentDidMount(){
        // 监听 Shopcartgoods页面传来的选中的商品的数组（数组中保存的是选中的商品的下标索引）
        PubSub.subscribe('isCheckedAll',(eventname,checkValue)=>{
            this.setState({
                checkAll:checkValue
            })
        })
    }
    componentWillUnmount(){  
        // 卸载清除监听事件
        PubSub.unsubscribe('isCheckedAll');  
    } 

    // 全选和全不选
    checkedAll(e){
        const { checked } = e.target;
        const { shopcartData } = this.props;
        let newArr = [];
        if(checked){
            for (let index of shopcartData.keys()) {
                newArr.push(index)
            }
        }else{
            newArr = [];
        }

        this.setState({
            checkAll:newArr
        },()=>{
            // 主要用于反选时，将要选中或不选的商品索引传给 Shopcartgoods页面
            PubSub.publish('isChecked',this.state.checkAll)  
        })
    }

    // 计算总价
    sumPrice(){
        const { checkAll } = this.state;
        const { shopcartData } = this.props;
        let sum={
            sumPrice:0,// 选中商品的总价格
            sumNum:0  // 选中商品的总数量
        };
        for(let val of checkAll){
            sum.sumPrice += shopcartData[val].jdPrice * shopcartData[val].similarEnter; 
            sum.sumNum += shopcartData[val].similarEnter * 1
        }
        return sum;
    }

    render(){
        const { shopcartData } = this.props;
        let { checkAll } = this.state;
        return (
            <div className='shopcart-sumprice'>
                <div>
                    {checkAll.length && checkAll.length===shopcartData.length?'全不选：':'全选：'}

                    <input  type='checkbox'
                            checked={checkAll.length && checkAll.length===shopcartData.length}
                            onChange={this.checkedAll.bind(this)}
                    />
                </div>
                <div>
                    总计：<span>￥<b>{this.sumPrice().sumPrice.toFixed(2)}</b></span>
                </div>
                <div>去结算({this.sumPrice().sumNum})</div>
            </div>
        )
    }
}

const mapStateToType = (state,ownProps) => {
    return {
        shopcartData:state.shopcartData.shopcartData
    }
}

export default connect(mapStateToType)(Sumprice);

