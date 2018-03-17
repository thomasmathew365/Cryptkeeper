import React from 'react'
import ReactDOM from 'react-dom'
import Landing from './Landing'

class Main extends React.Component {
	render () {
		return (
			<Landing />
		)
	}
}

ReactDOM.render(<Main />, document.getElementById('app'))
