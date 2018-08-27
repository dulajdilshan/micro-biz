import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <NavBar/>
                {/*<div className="row justify-content-center">*/}
                    {/*<div className="col col-lg">*/}
                        {/*<div className="card">*/}
                            {/*<div className="card-header">Example Component</div>*/}
                            {/*<div className="card-body">*/}

                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
