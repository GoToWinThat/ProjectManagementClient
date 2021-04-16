import React from 'react';
import { Nav } from 'react-bootstrap';

import { ImUser } from "react-icons/im";
import { RiNotification3Fill } from "react-icons/ri";
import { IconContext } from "react-icons";

const NavbarAccount = () => (   
    <IconContext.Provider value={{ className: "userIcons", color: "#F0F0F0" }}>
        <Nav className="ml-auto navbar-right">
            <Nav.Link href="/features"> <RiNotification3Fill size={25} /> </Nav.Link>
            <Nav.Link href="/"> <ImUser size={35} /> </Nav.Link>
        </Nav>
    </IconContext.Provider>
)

export default NavbarAccount;