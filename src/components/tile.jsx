import React from 'react';
import PropTypes from 'prop-types';

const TileComponent = ({ id, text, imgSrc, onHandleClick }) => {

    const tile = { id, text, imgSrc };

    const clickTile = () => {
        if (onHandleClick) {
            onHandleClick(tile);
        }
    };

    return (
        <div className="tileDiv col-25 center" onClick={clickTile}>
            <div className="img-wrap"><img src={imgSrc} alt="tile"/></div>
            <div className="text-caption"> {text} </div>
        </div>
    );
};

TileComponent.propTypes = {
    text: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onHandleClick: PropTypes.func,
};

export default TileComponent;
