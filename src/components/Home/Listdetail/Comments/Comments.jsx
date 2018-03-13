import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Comments.css';


class Comments extends Component{
   
    render(){
        const { commentInfoList } = this.props.wareDetailComment;
        return (
            <div className='detail-goods'>
            {
                commentInfoList.map((item,index)=>{
                    return <div key={index} style={{marginBottom:'40px'}}>
                        <div><span>{item.userNickName}</span><time>{item.commentDate}</time></div>
                        <div>{item.commentData}</div>
                        <div>
                            {
                                item.pictureInfoList && item.pictureInfoList.map((img,ind)=>{
                                    return <img key={ind} alt='' src={img.picURL}/>
                                })
                            }
                        </div>
                        <div>购买日期：{item.orderDate}</div>
                        <div>颜色：{item.wareAttribute[0]['颜色']}</div>
                    </div>
                })
            }
            </div>
        )
    }
}

// Comments.propTypes={
// }

export default Comments;