import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	// 当一个组件从父组件接受参数，只要父组件的render执行了，子组件的该方法就会执行
	componentWillReceiveProps() {
		console.log('child componentWillReceiveProps');
	}

	// 组件被页面移除时执行
	componentWillUnMount() {
		console.log('child componentWillUnMount');
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		if(nextProps.content !== this.props.content) {
			return true;
		}else {
			return false;
		}
	}
	handleClick() {
		const { deleteItem, index } = this.props;
		deleteItem(index);
	}

	render() {
		const { content, test } = this.props;
		return (
			<div onClick={this.handleClick}>
				{test}-{content}
			</div>
		)
	}
}

TodoItem.propTypes = {
	test: PropTypes.string.isRequired,
	content: PropTypes.string,
	deleteItem: PropTypes.func,
	index: PropTypes.number
}

TodoItem.defaultProps = {
	test: 'hello world'
}

export default TodoItem;
