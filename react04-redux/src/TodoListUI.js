import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const TodoListUI = (props)=> {
		return (
			<div style={{marginTop:10, marginLeft: 10}}>
				<div>
					<Input 
						value={props.inputValue} 
						placeholder="todo info" 
						style={{width: 300, marginRight: 10}}
						onChange={props.handleInputChange}
					/>
					<Button type="primary" onClick={props.handleBtnClick}>提交</Button>
				</div>
				<List
					style={{marginTop: 10, width: 300}}
					bordered
					dataSource={props.list}
					renderItem={(item, index) => (<List.Item onClick={(index) => {props.handleItemDelete(index)}}>{item}</List.Item>)}
			    />
			</div>
		)
}

export default TodoListUI;