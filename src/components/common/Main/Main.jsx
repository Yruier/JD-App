import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import ROUTES from '../../../route/routes';
// import Listdetail from '../../Home/Listdetail/index';
import './Main.css';

class Main extends Component{
    render(){
        return (
            <div className="App-main">
            {
                ROUTES.map((item,index)=>{
                    return <Route exact
                                key={index}
                                path={item.to} 
                                component={item.component}
                            >
                        </Route>
                })
            } 
            
            </div>
        )
    }
}

export default Main;
