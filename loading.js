import React from 'react'
import PropTypes from 'prop-types'

export default class Loading extends React.Component {
	static propTypes = {
		loading: PropTypes.bool,
		children: PropTypes.object
	};

	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}

	componentDidMount() {
		const loading = this.props.loading;
		this.setState({
			loading
		})
	}

	componentWillReceiveProps(nextProps) {
		const {loading} = nextProps
		this.setState({
			loading
		})
	}

	render() {
		const loading = this.state.loading;
		const Spinner = this.props.spinner;
		return (
			loading ? (Spinner ? <Spinner />: 'Loading...') : this.props.children
		);
	}
}