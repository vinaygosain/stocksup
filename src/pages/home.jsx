import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import TileComponent from '../components/tile';
import ModalComponent from '../components/modal';

const HomeComponent = (props) => (

    <div className="tileContainer">
        {
            _.map(props.selfProps, (tile) => <TileComponent key={tile.id} {...tile} onHandleClick={props.handleTileClick}/>)
        }

        {props.selectedTile &&
            <ModalComponent {...props.selectedTile} onHandleCancel={props.handleModalClose} onHandleEditTile={props.handleEditTile}/>
        }
    </div>
);

HomeComponent.propTypes = {
    selfProps: PropTypes.array.isRequired,
    handleModalClose: PropTypes.func,
    handleEditTile: PropTypes.func,
    handleTileClick: PropTypes.func,
    selectedTile: PropTypes.object,
};

export default HomeComponent;
