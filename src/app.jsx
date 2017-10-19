import React from 'react';

// binder library is for removing this manual bindings from class components.
import binder from 'react-class-binder';
import { BrowserRouter as Router } from 'react-router-dom';

import HeaderComponent from './components/header';
import { loadDataFromServer } from './api';
import FooterComponent from './components/footer';
import BodyComponent from './containers/body';
import loader from '../assets/loader.gif';

class App extends binder(React.Component) {

    componentDidMount() {
        const self = this;
        loadDataFromServer().then(self.shareResponse);
    }

    shareResponse(res) {
        const tiles = res.data;
        this.setState({ tiles });
    }

    render() {
        if (this.state && this.state.tiles) {
            return (
                <Router forceRefresh>
                    <div>
                        <HeaderComponent/>
                        <BodyComponent tiles={this.state.tiles} refreshData={this.shareResponse}/>
                        <FooterComponent/>
                    </div>
                </Router>
            );
        }
        return <div className="center"><img className="loader-gif" src={loader}/></div>; // loader gif to be placed.
    }
}

export default App;
