import React,{Component,Fragment} from 'react';
import TudoListItem from './TudoListItem';
import './style.css';

class TudoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:'',
            list:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelect = this.handleItemDelect.bind(this);
;    }
    render () {
        return (
            <Fragment>
                <input type="text" value={this.state.inputValue} 
                    className="box"
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleBtnClick}>提交</button>
                <ul>
                   {this.getTudoItem()}
                </ul>
            </Fragment>
        )
    }
    getTudoItem(){
       return  this.state.list.map((item,index) => {
            return (
                <Fragment  key={index}>
                    <TudoListItem 
                    content={item} 
                    index={index}
                    deleteItem ={this.handleItemDelect}
                    />
                </Fragment>
            )
       })
    }
    handleInputChange(e){
        const value = e.target.value;
        this.setState(() => ({
            inputValue : value
        }))
    }
    handleBtnClick(){
        this.setState((prevState) => ({
            list: [...prevState.list,prevState.inputValue],
            inputValue: ''
        }))
    }
    handleItemDelect(index){
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index,1);
            return {list}
        })
    }
}


export default TudoList;

