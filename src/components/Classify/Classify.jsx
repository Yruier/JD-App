import React, { Component } from 'react';
import './Classify.css';
import { connect } from 'react-redux';
import { JDClassify } from '../../api/service'
import classifyAction from '../../store/action/classify'

class Classify extends Component{
    constructor(props){
        super(props);
        this.state={
            list:null
        }
    }
    
    componentDidMount(){
        JDClassify()
            .then((result)=>{
                const { dispatch } = this.props;
                dispatch(classifyAction(result.data))
                this.setState({
                    list: JSON.parse(this.props.classify[0].datas.catalogBranch).data
                })
            },(error)=>{
                throw new Error(error)
            })
        
    }
    toggleList(e){
        const { classify }=this.props
        for (let item of classify){
            if (item.tit === e.target.innerText){
                this.setState({
                    list: JSON.parse(item.datas.catalogBranch).data
                })
            }
        }
    }
    render(){
        const {classify}=this.props;
        const {list}=this.state;
        return (
            <div className='App-classify'>
                <div className='classify-left'>
                    <div>
                    {  
                        classify && classify.map((item,index)=>{
                            return (
                                <div key={index} 
                                    className='classify-item'
                                    onClick={this.toggleList.bind(this)}
                                    >
                                    {item.tit}
                                </div>
                            )
                        })
                    }
                    </div>
                 </div>
                 <div className='classify-right'>
                {
                    list && list.map((item,index)=>{
                        return(
                            <div key={index}>
                                {
                                    // item.name==='专场推荐焦点图'?
                                    // <div className='force-img'><img alt='' src={item.icon}/></div>
                                    // :
                                    <div className='classify-right-list'>
                                        <h4>{item.name}</h4>
                                        <div className='classify-right-list-box'>
                                        {
                                            item.catelogyList.map((val,ind)=>{
                                                return <div key={ind}>
                                                    <span><img alt='' src={val.icon} /></span>
                                                    <span>{val.name}</span>
                                                </div>
                                            }) 
                                        }
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    })
                }
                 </div>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {
        classify:state.classify.classify
    }
}

export default connect(mapStateToProps)(Classify);
// mapStateToProps(state,ownProps)=>{}    是一个函数，返回一个对象
// mapDispatchToTypes
// mergeProps
// options