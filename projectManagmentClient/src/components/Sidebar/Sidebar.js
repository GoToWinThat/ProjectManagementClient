import React from 'react';
import { Navbar } from 'react-bootstrap';
import NavbarSearch from './NavbarSearch';
import NavbarAccount from './NavbarAccount';

import './style.scss';

const NavigationBar = () => (
        <Navbar className="navbar menu">
            <NavbarAccount />
        </Navbar>
)

export default NavigationBar;