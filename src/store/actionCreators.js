import {CHANGE_INPUT_VALUE,CLICK_BTN_CHANGE,CLICK_DEL} from './actionTypes';
export const getInputChangeAction = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})
export const getAddBtnChangeAction = () =>({
    type:CLICK_BTN_CHANGE
})
export const getDelAction = (index) => ({
    type: CLICK_DEL,
    index
})