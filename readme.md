# HOC Loading

## About
A Simple high order component (HOC) that helps to show loading sign until child component is ready

## Usage
**npm**
```
npm i hoc-loading
```
Usage:

```
import React from 'react'
import Backbone from 'backbone'
import {isEmpty} from 'lodash'

const Spinner = () => (
	<div>Loading...</div>
)

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			plans: null
		}
	}

	componentDidMount = () => {
		setTimeout(() => {
			this.setState({
				plans
			})
		}, 5000)
	}

	render = () => {
	  return (
	    <Loading spinner={Spinner} loading={isEmpty(this.state.plans)}>
			<div>
				This will appear when plan is not null
			</div>
		</Loading>
	  );
	}
}
```