import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Head.css';

class Head extends Component{
    static propTypes = {
        location: PropTypes.object.isRequired
      }
    toggleClass(){
        const {pathname}=this.props.location;
        return pathname==='/'?'hide-icon':'';
    }
    goBack(){
        this.props.history.replace('/')
    }
    goMine(){
        this.props.history.push('/mine')
    }
    render(){
        const {pathname}=this.props.location;
        const {userInfo}=this.props
        return (
            <header className={`App-header ${this.toggleClass()}`}>
                {/* 返回按钮 */}
                <span  className={`header-left iconfont icon-fanhui ${this.toggleClass()}`}
                        onClick={this.goBack.bind(this)}
                ></span>
                {/* 搜索框 */}
                <div className="header-center">
                    <div className="header-search"></div>
                </div>
                {/* 登录 */}
                <span className='header-right' 
                        onClick = {this.goMine.bind(this)}
                        style={pathname==='/'?{display:'block'} :{display:'none'}}
                        >
                        {userInfo? userInfo.userName : '登录'}
                </span>
            </header>
        )
    }
}

const maxStateToProps = (state,ownProps) =>{
    return {
        userInfo:state.userInfo.userInfo
    }
}
export default withRouter(connect(maxStateToProps)(Head));
