import React, {Component, Fragment} from 'react';

constructor(props) {
	super(props);
}

class TodoList extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<input />
					<button>提交</button>
				</div>
				<ul>
					<li>歲月長，衣裳薄</li>
					<li>歲月長，衣裳薄</li>
					<li>歲月長，衣裳薄</li>
				</ul>
			</Fragment>
		)
	}
}

export default TodoList;
