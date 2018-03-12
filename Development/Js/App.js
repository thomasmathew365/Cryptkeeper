var React = require('react');

var Comp = React.createClass({
	render: function() {
		return <div>Hello</div>
	}
});

ReactDOM.render(<Comp />, document.getElementById('app'));
