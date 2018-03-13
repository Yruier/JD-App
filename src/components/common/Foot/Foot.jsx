import React, { Component } from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import ROUTES from '../../../route/routes';
import PropTypes from 'prop-types';
import '../../../iconfont/iconfont.css';
import './Foot.css';

class Foot extends Component{
    static propTypes = {
        location: PropTypes.object.isRequired
      }
    toggleClass(){
        const {pathname}=this.props.location;
        return pathname==='/'?'':'hide-footer';
    }
    render(){
        return (
            <footer className={`App-footer ${this.toggleClass()}`}>
            {
                ROUTES.map((item,index)=>{
                    return <NavLink exact
                                key={index}
                                to={item.to}
                                className='footer-item'
                                activeClassName="footer-active"
                                >
                            <i className={`iconfont icon-${item.icon}`}></i>
                            <span className="icon-text">{item.text}</span>
                        </NavLink>
                })
            }
            </footer>
        )
    }
}

export default withRouter(Foot);
