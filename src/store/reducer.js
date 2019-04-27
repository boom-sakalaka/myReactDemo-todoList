import {CHANGE_INPUT_VALUE,CLICK_BTN_CHANGE,CLICK_DEL,InitListData} from './actionTypes';
const defaultState = {
    inputValue: '',
    list:[]
}
export default (state = defaultState,action) =>{
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === InitListData){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.value;
        return newState;
    }
    if(action.type === CLICK_BTN_CHANGE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === CLICK_DEL){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}