import React, { Component } from 'react';
import './Nav.css';
import { connect } from 'react-redux';
import navsAction from '../../../store/action/nav';

class Nav extends Component{
    changeName(){
        const { dispatch } = this.props;
        dispatch({
            type:'CHANGE_NAME',
            age:100
        })
    }
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(navsAction())
    }
    render(){
        const {navs}=this.props
        return (
            <div className='home-nav'>
                 {  
                    navs && navs.map((item,index)=>{
                        return (
                            <div key={index} className='nav-item'>
                                <span className='nav-icon'><img src={require(`../../../images/${item.icon}`)} alt=''/></span>
                                <span className='nav-text'>{item.text}</span>
                            </div>
                        )
                     })
                 }
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {
        sname:state.nav.name,
        sage:state.nav.age,
        navs:state.nav.navs
    }
}

export default connect(mapStateToProps)(Nav);
// mapStateToProps(state,ownProps)=>{}    是一个函数，返回一个对象
// mapDispatchToTypes
// mergeProps
// options