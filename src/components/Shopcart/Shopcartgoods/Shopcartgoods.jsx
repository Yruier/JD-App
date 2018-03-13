import React, { Component } from 'react';
// import emitter from '../../../utils/events/index'
import PubSub from 'pubsub-js';
import { connect } from "react-redux";
import { JDShopcart } from "../../../api/service";
import addToShopcartAction from '../../../store/action/addToShopcart';
import './Shopcartgoods.css';

class Shopcartgoods extends Component{
    constructor(props){
        super(props)
        this.state={
            // shopcartData: [],   //本地存储购物车数据=>未完成 ????
            checkValue:[]
        }
    }
    
    componentDidMount() {
        PubSub.publish('isCheckedAll',this.state.checkValue)
        PubSub.subscribe('isChecked',(eventname,checkValue)=>{
            this.setState({
                checkValue:checkValue
            })
        })
    }
    componentWillUnmount(){  
        PubSub.unsubscribe('isChecked');  
    } 
    // 控制商品数量的加减
    countNum(id,type){
        JDShopcart({id,type})
        .then(res=>{
            const {dispatch} =this.props;
            dispatch(addToShopcartAction(res.data))
        })
        .catch(error=>{
            throw Error(error);
        })
    }
    // 选中或不选功能
    handleChange(e){
        const { checked, value } = e.target; 
        let { checkValue } = this.state;

        if (checked && checkValue.indexOf(value*1) === -1){
            checkValue.push(value * 1)  // 选中
        }else{
            checkValue = checkValue.filter(x => x !== value * 1) // 不选
        }
       
        this.setState({
            checkValue
        },()=>{
            PubSub.publish('isCheckedAll',this.state.checkValue)
        })
    }

    render(){
        const { shopcartData }=this.props;
        let { checkValue } = this.state;
        return (
            <div className='shopcart-goods'>
                {
                    shopcartData && shopcartData.map((item,idx)=>{
                        return <div key={idx} className='shopcart-item'>
                            <div className='shopcart-input'>
                                <input type='checkbox' 
                                        value={idx}
                                        checked={checkValue.indexOf(idx)!==-1} //初始为 false
                                        onChange={this.handleChange.bind(this)}
                                        />
                            </div>
                            <div className='shopcart-img'><img alt='' src={item.imageurl}/></div>
                            <div className='shopcart-text'>
                                <p>{item.wname}</p>
                                <div>价格：{item.jdPrice}</div>
                                <div>
                                    数量
                                    <button onClick={this.countNum.bind(this,idx, item.similarEnter>0 ?-1:0)}> - </button> 
                                    
                                    {item.similarEnter}
                                    
                                    <button onClick={this.countNum.bind(this,idx,+1)}> + </button>
                                    {
                                        item.similarEnter>=1?'':<span style={{color:'red'}}>您确定要删除吗？</span>
                                    }
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}

const mapStateToType = (state,ownProps) => {
    return {
        shopcartData:state.shopcartData.shopcartData
    }
}

export default connect(mapStateToType)(Shopcartgoods);

