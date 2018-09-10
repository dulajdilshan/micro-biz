import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <NavBar/>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example/>, document.getElementById('example'));
}
