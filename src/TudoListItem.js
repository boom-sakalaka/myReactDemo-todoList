import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TudoListItem extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        const {content,test} =  this.props;
        return (
            <li onClick={this.handleClick}>
               {test} __ {content}
            </li>
        )
    }
    handleClick(){
        const {deleteItem,index}  = this.props;
        deleteItem(index);
    }
}
TudoListItem.propTypes = {
  content : PropTypes.string.isRequired,
}
TudoListItem.defaultProps= {
    test: 'jkjkj'
}
export default TudoListItem;