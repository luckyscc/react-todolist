import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
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

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
    	inputValue: value
    }))
  }

  handleBtnClick() {
  	this.setState((prevState) => ({
  		list: [...prevState.list, prevState.inputValue],
  		inputValue: ''
  	}))
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
		return (
			<Fragment>
				<div className="content">
					<label htmlFor="insertArea">输入内容</label>
					<input 
						id="insertArea" 
						value={this.state.inputValue} 
						onChange={this.handleInputChange.bind(this)} 
						className="input"
					/>
					<button onClick={this.handleBtnClick.bind(this)} className="button">提交</button>
				</div>
				<ul>
					{this.getTodoItem()}
				</ul>
			</Fragment>
		)
	}
}

export default TodoList;