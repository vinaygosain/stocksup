import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// binder library is for removing this manual bindings from class components.
import binder from 'react-class-binder';

import HomeComponent from '../pages/home';
import SearchComponent from '../pages/search';
import NavBarComponent from '../components/navbar';
import { sendDataToServer } from '../api';

class BodyComponent extends binder(React.Component) {

    constructor(props) {
        super(props);

        this.state = {
            selectedTile: null,
        };
    }

    componentWillReceiveProps() {
        this.setState({
            selectedTile: null,
        });
    }

    LoadHomeComponent(props) {
        return (<HomeComponent {...props} selfProps={this.props.tiles} selectedTile={this.state.selectedTile}
            handleTileClick={this.onTileClick} handleModalClose={this.onCancel} handleEditTile={this.onEditTile}
        />);
    }

    LoadSearchComponent(props) {
        return (<SearchComponent {...props} selfProps={this.props.tiles} selectedTile={this.state.selectedTile}
            handleTileClick={this.onTileClick} handleModalClose={this.onCancel} handleEditTile={this.onEditTile}
        />);
    }

    onTileClick(tile) {
        this.setState({
            selectedTile: tile,
        });
    }

    onCancel() {
        this.setState({
            selectedTile: null,
        });
    }

    onEditTile(id, tile) {
        const { refreshData } = this.props;
        sendDataToServer(id, tile)
            .then(refreshData);
    }

    render() {
        return (
            <div className="body-container">
                <NavBarComponent/>
                <Route exact path="/" component={this.LoadHomeComponent}/>
                <Route path="/search" component={this.LoadSearchComponent}/>
                <Route path="/home" component={this.LoadHomeComponent}/>
            </div>
        );
    }
}

BodyComponent.propTypes = {
    tiles: PropTypes.array.isRequired,
    refreshData: PropTypes.func.isRequired,
};

export default BodyComponent;
