import React from 'react';
import PropTypes from 'prop-types';

const SearchBarComponent = ({ search }) => {

    const searchTxtEnter = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        search(ev.target.value);
    };

    return (
        <div>
            <input type="search" onChange={searchTxtEnter} autoFocus autoComplete/>
        </div>
    );
};

SearchBarComponent.propTypes = {
    search: PropTypes.func.isRequired,
};

export default SearchBarComponent;
