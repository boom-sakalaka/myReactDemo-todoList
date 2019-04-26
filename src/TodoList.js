import React ,{Component,Fragment} from 'react';
import {getInputChangeAction,getAddBtnChangeAction,getDelAction} from './store/actionCreators';
import 'antd/dist/antd.css';
import store from './store';
import {Input} from 'antd';
import { Button } from 'antd';
import { List} from 'antd';

class TodoList extends Component  {
    constructor(props){
        super(props);
        this.state= store.getState();
        this.handleChange = this.handleChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
           <Fragment>
                <Input 
                    value={this.state.inputValue} 
                    style={{width: '300px'}}
                    onChange ={this.handleChange} 
                    /><Button type="primary" onClick={this.handleClick}>提交</Button>
                <List
                    style={{marginTop:'10px',width:'300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item onClick={this.handleDel.bind(this,index)}>{item}</List.Item>)}
                />
           </Fragment>
        )
    }
    handleChange (e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    handleClick (){
        const action = getAddBtnChangeAction();
        store.dispatch(action);
    }
    handleDel(index) {
        const action = getDelAction(index);
        store.dispatch(action);
    }
}
export default TodoList;