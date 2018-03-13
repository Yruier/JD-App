import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { StickyContainer, Sticky } from 'react-sticky';
// import 'antd-mobile/dist/antd-mobile.css'; //配置babel就不需要引入css了
import Goods from './Goods/index';
import Comments from "./Comments/index";
import { JDComments } from "../../../api/service";
import { connect } from 'react-redux';
import commentsAction from '../../../store/action/comments';
import { mixin } from 'lodash-decorators'; 
import './Listdetail.css';

const tabs = [
  { title: '商品' },
  { title: '详情' },
  { title: '评价' },
];

const renderTabBar = (props) => {
  return (
    <Sticky>
        {({ style }) => <div className='list-detail-head-tabs' style={{ ...style, zIndex: 1}}>
            <div onClick={props.onTabClick}><i className='iconfont icon-fanhui'></i></div>
            <Tabs.DefaultTabBar {...props} />
            <div><i className='iconfont icon-fenlei'></i></div>
        </div>}
    </Sticky>)
}

const Minxin={
    componentDidMount() {
        JDComments()
            .then((result) => {
                const {commentsAction} = this.props
                commentsAction(result.data)
                
            }, (error) => {
                throw error;
            })
        localStorage.setItem('shopcartData',[])
    },
    goBack(e) {
        if (!e.title) {
            this.props.history.push({ pathname: '/' });
        }
    }
}

@withRouter
@mixin(Minxin)
class Listdetail extends Component{
    render(){
        const { location, comments } = this.props;
        return (
            <div className='home-list-detail'>
                <StickyContainer>
                <Tabs tabs={tabs}
                    onTabClick={this.goBack.bind(this)}
                    initalPage={'t1'}
                    renderTabBar={renderTabBar}
                    >
                    <div className='list-detail-content'>
                        <Goods data={location.params}/>
                    </div>
                    <div className='list-detail-content'>
                    2
                    </div>
                    <div className='list-detail-content'>
                        {
                            comments && <Comments {...comments}/>
                        }
                    </div>
                </Tabs>
                </StickyContainer>
            </div>
        )
    }
}

const mapStateProps=(state,ownProps)=>{
    return {
        comments:state.comments.comments
    }
}

/* connect 第二个参数 mapDispatchProps 的两种用法 */
// 1、 对象形式：
// const mapDispatchProps={
//       commentsAction
// }

// 2、函数形式
const mapDispatchProps=(dispatch,ownProps)=>{
    return {
        commentsAction: (...args) => dispatch(commentsAction(...args))  // 显式dispatch
        // bindActionCreates(actionCreates, dispatch)  隐式dispatch
    }
      
}
export default connect(mapStateProps,mapDispatchProps)(Listdetail);