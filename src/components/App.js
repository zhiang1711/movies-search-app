import React, { Component } from 'react';
import Routes from './Routes';

class App extends Component {
    render() {
        return (
            <section>
                <h1 className="center">Movies App</h1>
                <Routes />
            </section>
        );
    }
}

export default App;
