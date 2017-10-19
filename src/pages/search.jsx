import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

// binder library is for removing this manual bindings from class components.
import binder from 'react-class-binder';

import SearchBarComponent from '../components/searchbar';
import TileComponent from '../components/tile';
import ModalComponent from '../components/modal';

class SearchComponent extends binder(React.Component) {

    constructor(props) {
        super(props);
        this.state = {
            resultTiles: [],
        };
    }

    componentWillReceiveProps(nextProps) {
        this.search(this.state.srchString, nextProps);
    }

    search(value, props = this.props) {
        const { selfProps } = props;
        let searchResults;
        if (value) {
            searchResults = _.filter(selfProps, ({ text }) => {
                text = text.toLowerCase();
                value = value.toLowerCase();
                if (text.indexOf(value) !== -1) {
                    return true;
                }
                return false;
            });
        } else {
            searchResults = [];
        }
        this.setState({
            srchString: value,
            resultTiles: searchResults,
        });
    }

    render() {
        return (
            <div className="center search-bar">
                <SearchBarComponent search={this.search} {...this.state.resultTiles}/>

                {this.state.resultTiles.length > 0 &&
                    <div className="tileContainer">
                        {
                            _.map(this.state.resultTiles, (tile) =>
                                <TileComponent key={tile.id} {...tile} onHandleClick={this.props.handleTileClick}/>)
                        }

                        {this.props.selectedTile &&
                            <ModalComponent {...this.props.selectedTile}
                                onHandleCancel={this.props.handleModalClose}
                                onHandleEditTile={this.props.handleEditTile}
                            />}

                    </div>
                }
            </div>
        );
    }
}

SearchComponent.propTypes = {
    selfProps: PropTypes.array.isRequired,
    selectedTile: PropTypes.object,
    handleModalClose: PropTypes.func,
    handleEditTile: PropTypes.func,
    handleTileClick: PropTypes.func,
};

export default SearchComponent;
