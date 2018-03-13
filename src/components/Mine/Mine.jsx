import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import Login from './Login/index';
import Register from './Register/index';
import './Mine.css';

/*  登录 注册 本地存储  */

function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => 
        <div style={{ ...style, zIndex: 1,background: '#ddd'}}>
            <div className='mine-login' onClick={props.onTabClick}><i className='iconfont icon-fanhui'></i></div>
            <Tabs.DefaultTabBar {...props} />
        </div>
    }
  </Sticky>);
}
const tabs = [
  { title: '登录' },
  { title: '注册' }
];

// 高阶组件
const HOCMine = (Com) => {
    return class extends Component{
        constructor(props){
            super(props)
            this.state={
                value:'zs'
            }
        }
        proc(arg){
            console.log(arg,'arg')
        }
        change(e){
            this.setState({
                value:e.target.value
            })
        }
        
        render(){
            // const props=Object.assign({},ref=this.proc.bind(this))
            return (
                <Com {...this.props} 
                    value={this.state.value}
                    changeValue={this.change.bind(this)}
                    />
            )
        }
    }
}


class Mine extends Component{
     goBack(e) {
        if (!e.title) {
            this.props.history.push({ pathname: '/' });
        }
    }
    render(){
        return (
            <div className='App-mine'>
                <StickyContainer>
                    <Tabs tabs={tabs}
                        initalPage={'t1'}
                        renderTabBar={renderTabBar}
                        onTabClick={this.goBack.bind(this)}
                        >
                        <div className='login'>
                            <Login/>
                        </div>
                        <div className='register'>
                            <Register/> 
                        </div>
                    </Tabs>
                </StickyContainer>    
            </div>
        )
    }
}

export default HOCMine(Mine);