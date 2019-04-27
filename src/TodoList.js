import React ,{Component} from 'react';
import {getInputChangeAction,getAddBtnChangeAction,getDelAction,getInitListData} from './store/actionCreators';
import TodoListUI from './TodoListUI';
import axios from 'axios';
import 'antd/dist/antd.css';
import store from './store';


class TodoList extends Component  {
    constructor(props){
        super(props);
        this.state= store.getState();
        this.handleChange = this.handleChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDel.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
          <TodoListUI 
          inputValue={this.state.inputValue}
          handleChange ={this.handleChange}
          handleClick ={this.handleClick}
          handleDel ={this.handleDel}
          list={this.state.list}
          />
        )
    }
    componentDidMount() {
        axios.get("http:////5cbddef8ecded20014c20c8e.mockapi.io/api/getList")
        .then(({data})=>{
            const action = getInitListData(data);
            store.dispatch(action);
        })
        .catch()
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