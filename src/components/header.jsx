import React from 'react';
import logo from '../../assets/logo.svg';

const HeaderComponent = () => (
    <header>
        <div className="horizontal-row">
            <div className="col-25"><img src={logo} width="50px" alt="logo"/></div>
            <div className="col-75 title">STOCKUP</div>
        </div>
    </header>
);

export default HeaderComponent;
