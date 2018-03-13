import React, { Component } from 'react';
import './Year.css';

class Year extends Component{
    constructor(props) {
        super(props)
        this.state = {
            value: '苹果'
        }
    }
    changeVal(e) {
        console.log(e.target.value)
        this.setState({
            value: e.target.value
        }, () => {
            // console.log(this.state.value)
        })
    }
    render(){
        return (
            <div>
                <br />
                受控单选框：<br />
                <label>Apple</label>
                <input type='radio' value='苹果' checked={this.state.value === '苹果'} onChange={this.changeVal.bind(this)} name='radio' id='apple'/><br />

                <label>Banana</label>
                <input type='radio' value='香蕉' checked={this.state.value === '香蕉'} onChange={this.changeVal.bind(this)} name='radio' id='banana' /><br />

                <label>Orange</label> 
                <input type='radio' value='橘子' checked={this.state.value === '橘子'} onChange={this.changeVal.bind(this)} name='radio' id='orange' /><br /> 


                <label htmlFor="male">Male</label>
                <input type="radio" name="sex" id="male" value='男'/>
                <br/>
                <label htmlFor="female">Female</label>
                <input type="radio" name="sex" id="female" value='女'/>
            </div>
        )
    }
}

export default Year;