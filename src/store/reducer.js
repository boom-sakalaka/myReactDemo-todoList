const defaultState = {
    inputValue: '',
    list:[]
}
export default (state = defaultState,action) =>{
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === 'click_btn_change'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        return newState;
    }
    if(action.type === 'click_del'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        newState.inputValue = '';
        return newState;
    }
    return state;
}