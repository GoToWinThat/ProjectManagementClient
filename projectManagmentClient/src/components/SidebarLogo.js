import React from 'react';
import { Navbar } from 'react-bootstrap';
import NavbarSearch from './NavbarSearch';
import NavbarAccount from './NavbarAccount';

import './style.scss';

const SidebarLogo = () => (
        <Navbar className="navbar menu">
            <NavbarAccount />
        </Navbar>
)

export default SidebarLogo;