import React, {Fragment} from 'react';
import {connect} from 'react-redux';

const TodoList = (props) => {
    const {inputValue,handleClick,list,changeInputValue} = props;
    return (
        <Fragment>
           <div>
                <input type="text" value={inputValue} onChange= {changeInputValue}/>
                <button onClick = {handleClick}>提交</button>
           </div>
           <ul>
               {
                list.map((item) => {
                   return (
                        <li>
                            {item}
                        </li>
                   )
               })
               }
           </ul>
        </Fragment>
    )
}


const mapStateToProps = (state) => {
    return {
        inputValue : state.inputValue,
        list : state.list
    }    
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue (e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },
        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);