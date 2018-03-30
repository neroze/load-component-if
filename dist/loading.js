'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loading = function (_React$Component) {
	_inherits(Loading, _React$Component);

	function Loading(props) {
		_classCallCheck(this, Loading);

		var _this = _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, props));

		_this.state = {
			loading: false
		};
		return _this;
	}

	_createClass(Loading, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var loading = this.state.loading;
			this.setState({
				loading: loading
			});
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var loading = nextProps.loading;

			this.setState({
				loading: loading
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var loading = this.state.loading;
			var Spinner = this.props.spinner;

			return loading ? Spinner ? _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(Spinner, null),
				'Loading spinner'
			) : 'Loading...' : this.props.children;
		}
	}]);

	return Loading;
}(_react2.default.Component);

Loading.propTypes = {
	loading: _propTypes2.default.bool,
	children: _propTypes2.default.object
};
exports.default = Loading;
