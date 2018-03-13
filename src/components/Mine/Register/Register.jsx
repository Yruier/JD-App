import React, { Component } from 'react';
import { mixin } from 'lodash-decorators';
import './Register.css';

const Mixin = {
// 电话号
    phoneNum(e){
        // 电话号正则
        // const phoneReg = /^1[345678]\d{9}$/;
        this.setState({
            phoneNum:e.target.phoneNum
        })
    },
    // 用户名
    changeName(e){
        this.setState({
            userName:e.target.value
        })
    },
    // 密码
    changePwd(e){
        this.setState({
            pwd:e.target.value
        })
    }
}

@mixin(Mixin)
class Register extends Component{
     // //用户名正则，4到16位（字母，数字，下划线，减号）
        // const userReg = /^[a-zA-Z0-9_-]{4,16}$/;
        // // 密码正则，6位以上字母，数字
        // const pwdReg = /^[a-zA-Z0-9]{6,}$/;
    constructor(props){
        super(props)
        this.state={
            userName:'',
            pwd:'',
            warn:''
        }
    }
    
    render(){
        const { phoneNum, userName, pwd } = this.state;
        return (
            <div className='mine-register'>
                <div className='login-username'>
                    <span>手机号</span>
                    <input type='text' 
                            placeholder='请输入手机号'
                            value={phoneNum} 
                            onChange={this.phoneNum.bind(this,phoneNum)}
                            />
                </div>
                <div className='login-username'>
                    <span>验证码</span>
                    <input type='text' 
                            placeholder='请输入验证码'
                            value={userName} 
                            onChange={this.changeName.bind(this)}
                            />
                </div>
                <div className='login-username'>
                    <span>设置密码</span>
                    <input type='text' 
                            placeholder='请设置6-12个字符的密码'
                            value={userName} 
                            onChange={this.changeName.bind(this)}
                            />
                </div>
                <div className='login-username'>
                    <span>再次输入</span>
                    <input type='text' 
                            placeholder='请再次输入新密码'
                            value={pwd} 
                            onChange={this.changePwd.bind(this)}
                            />
                </div>
                <div className='login-username'>
                    <span>用户名</span>
                    <input type='text' 
                            placeholder='请再次输入新密码'
                            value={pwd} 
                            onChange={this.changePwd.bind(this)}
                            />
                </div>
                <div className='login-pwd-info'>
                    <span><input type='checkbox'/>同意<a>京东服务协议</a></span>
                </div>
                <div className='login-btn'>
                    注册
                </div>
                {/* <div style={{color:'red'}}>
                    {warn}
                </div> */}
            </div>
        )
    }
}

export default Register;