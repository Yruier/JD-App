import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './List.css';
import { connect } from 'react-redux';
import { JDList } from '../../../api/service'; //数据请求接口
import jdlistAction from '../../../store/action/jdlist';

class List extends Component{
    constructor(props){
        super(props)
        this.state={
            className:'home-list'
        }
    }
    componentDidMount(){ 
        const { dispatch } = this.props;
        JDList()
            .then((result)=>{
                const data=JSON.parse(result.data.recommend);
                if(data.code !== '0') return;
                
                dispatch(jdlistAction(data))
            },(error)=>{
                throw error;
            })
        
    }
    changeClass(){
        if (this.state.className ==='home-list'){
            this.setState({
                className:'home-list-flex'
            })
        }else{
            this.setState({
                className: 'home-list'
            })
        }
    }
    render(){
        const { jdList }=this.props
        return (
            <div className='home-list-box'>
                <h4 className='home-list-tit'>
                    热门推荐
                    <i className='iconfont icon-paihangbang'
                        onClick={this.changeClass.bind(this)}
                        >
                    </i>
                </h4>
                <div className={this.state.className}>
                 {  
                    jdList && jdList.map((item,index)=>{
                        return (
                            <NavLink  key={index} to={{pathname:'/detail',params:item}}>
                            <div className='list-item'>
                                <div className='list-item-pic'><img alt='' src={item.imageurl}/></div>
                                <div className='list-item-text'>
                                    <div className='list-item-text-word'>{item.wname}</div>
                                    <div>￥<span>{item.jdPrice}</span></div>
                                </div>
                            </div>
                            </NavLink>
                        )
                     })
                 }
                 </div>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {
        jdList: state.jdList.jdList
    }
}

export default connect(mapStateToProps)(List);
