import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { JDLogin } from '../../../api/service';
import { connect } from 'react-redux';
import loginAction from '../../../store/action/login'
import './Login.css';

@withRouter
class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            userName:'',
            pwd:'',
            warn:''
        }
    }
    // 用户名
    changeName(e){
        this.setState({
            userName:e.target.value
        })
    }
    // 密码
    changePwd(e){
        this.setState({
            pwd:e.target.value
        })
    }

    login(){
        const { userName, pwd } = this.state;
        const { history } = this.props;

        JDLogin({ userName, pwd })
        .then(result => {
            if(result.data){
                const { dispatch } = this.props;
                dispatch(loginAction(result.data))
                history.go(-1)
            }else{
                this.setState({
                    warn:'用户名或密码不正确'
                })
            }
        })
        .catch(error => {
            throw error;
        })    
    }

    render(){
        const { userName, pwd, warn } = this.state;
        return (
            <div>
                <div className='login-username'>
                    <span>用户名</span>
                    <input type='text' 
                            placeholder='请输入用户名'
                            value={userName} 
                            onChange={this.changeName.bind(this)}
                            />
                </div>
                <div className='login-pwd'>
                    <span>密码</span>
                    <input type='text' 
                            placeholder='请输入密码'
                            value={pwd} 
                            onChange={this.changePwd.bind(this)}
                            />
                </div>
                <div className='login-pwd-info'>
                    <span><input type='checkbox'/>记住密码</span>
                    <a>找回密码</a>
                </div>
                <div className='login-btn' onClick={this.login.bind(this)}>
                    登录
                </div>
                <div style={{color:'red'}}>
                    {warn}
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
    return {
        userInfo:state.userInfo.userInfo
    }
}
export default connect(mapStateToProps)(Login);