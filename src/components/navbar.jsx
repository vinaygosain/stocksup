import React from 'react';
import { Link } from 'react-router-dom';

const NavBarComponent = () => (
    <div className="links">
        <div className="nav-link"><Link to="/home">Home</Link></div>
        <div className="nav-link"><Link to="/search">Search</Link></div>
    </div>
);

export default NavBarComponent;
