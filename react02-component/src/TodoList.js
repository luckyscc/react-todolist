import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './style.css';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: []
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
	}

	// 组件被挂载到页面之前执行
	componentWillMount() {
		console.log('componentWillMount');
	}

	//页面加载之后执行
	componentDidMount() {
		axios.get('/api/todolist')
			.then((res) => {
				this.setState(() => ({
					list: [...res.data]
				}))
			})
			.catch(() => {alert('error')})	
	}

	// 组件被更新之前，自动被执行
	shouldComponentUpdate() {
		console.log('shouldComponentUpdate');
		return true;
	}

	// 组件被更新之前，自动执行；shouldComponentUpdate返回true执行否则不执行
	componentWillUpdate() {
		console.log('componentWillUpdate');
	}

	// 组件更新完成之后执行
	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	handleInputChange(e) {
		const value = e.target.value;
		console.log(this.input);
		this.setState(() => ({
			inputValue: value
		}))
	}

	handleBtnClick() {
		this.setState((prevState) => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		}),() => {
			console.log(this.ul.querySelectorAll('div').length);
		})
	}

	handleItemDelete(index) {
		const list = [...this.state.list];
		this.setState((prevState) => {
			const list = [...prevState.list];
			list.splice(index, 1);
			return {list}
		})
	}

	getTodoItem() {
		return (
			this.state.list.map((item, index) => {
				return (
					<TodoItem 
					key={index}
					content={item} 
					index={index}
					deleteItem={this.handleItemDelete.bind(this)}
					/>
					)
			})
			)
	}
	render() {
		console.log('render');
		return (
			<Fragment>
			<div className="content">
			<label htmlFor="insertArea">输入内容</label>
			<input 
			id="insertArea" 
			value={this.state.inputValue} 
			onChange={this.handleInputChange.bind(this)} 
			className="input"
			ref={(input) => {this.input = input}}
			/>
			<button onClick={this.handleBtnClick.bind(this)} className="button">提交</button>
			</div>
			<ul ref={(ul) => {this.ul = ul}}>
			{this.getTodoItem()}
			</ul>
			</Fragment>
			)
	}
}

export default TodoList;