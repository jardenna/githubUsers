import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '@layout/Nav';

function MainHeader() {
    return (
        <header className="main-header sticky">
            <div className="container">
                <h1 className="logo"><Link to='/'>Logo</Link></h1>

                <Nav />
            </div>
        </header>
    );
}

export default MainHeader;