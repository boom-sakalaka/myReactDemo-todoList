import React, {Fragment} from 'react';
import {Input,Button,List} from 'antd';

const TodoListUI = (props) =>{
    return (
       <Fragment>
            <Input 
                value={props.inputValue} 
                style={{width: '300px'}}
                onChange ={props.handleChange} 
                /><Button type="primary" onClick={props.handleClick}>提交</Button>
            <List
                style={{marginTop:'10px',width:'300px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (<List.Item onClick={() => {props.handleDel(index)}}>{item}</List.Item>)}
            />
       </Fragment>
    )
}

export default TodoListUI;
