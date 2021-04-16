import React, { useState } from 'react';
import {Navbar} from 'react-bootstrap';
import NavbarSearch from './NavbarSearch';
import NavbarAccount from './NavbarAccount';
import { BsChevronDoubleRight } from "react-icons/bs";
import {IconContext} from "react-icons";

import './style.scss';


const NavigationBar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <Navbar className="navbar menu">
            <IconContext.Provider value={{ className: "userIcons", color: "#F0F0F0" }}>
                <button onClick={showSidebar} className={sidebar ? 'sidebar_blue' : 'sidebar_blue'}>
                    <BsChevronDoubleRight size={20} />
                </button>
            </IconContext.Provider>
            <NavbarSearch/>
            <NavbarAccount/>
        </Navbar>
    )
}

export default NavigationBar;