import React ,{ Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = store.getState();
		console.log(this.state);
	}

	render() {
		return (
			<div style={{marginTop:10, marginLeft: 10}}>
				<div>
					<Input value={this.state.inputValue} placeholder="todo info" style={{width: 300, marginRight: 10}} />
					<Button type="primary">提交</Button>
				</div>
				<List
					style={{marginTop: 10, width: 300}}
					bordered
					dataSource={this.state.list}
					renderItem={item => (<List.Item>{item}</List.Item>)}
			    />
			</div>
		)
	}
}

export default TodoList;