import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Head from './components/common/Head/index';
import Main from './components/common/Main/index';
import Foot from './components/common/Foot/index';
import Listdetail from './components/Home/Listdetail/index';
import { Provider } from "react-redux";
import store from './store/index';
import './App.css';



class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className='App'>
                        <Head />
                        <Main />
                        <Foot />
                        <Route path='/detail' component={Listdetail} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;