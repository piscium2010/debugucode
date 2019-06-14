import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

    get title() {
        const s = ''
        return s
    }

    render() {
        return (
            <div>
                <h2>Debugger</h2>
                {this.title}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))