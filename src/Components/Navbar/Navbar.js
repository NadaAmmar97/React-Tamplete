import React from 'react';
import { Link} from 'react-router-dom';


import {NavbarSection, Logo, LogoText, UlList, ListItem, Anchor } from './style.js';

const Navbar = () => {
    return (
        <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                <UlList>
                    <ListItem className="list-item"><Link to='/'>Home</Link></ListItem>
                    <ListItem className="list-item"><Anchor>Work</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor>Portfolio</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor>Resume</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor>About</Anchor></ListItem>
                    <ListItem className="list-item"><Link to='/contact'>Contact</Link></ListItem>
                </UlList>
                
            </div>
            
        </NavbarSection>
    )
}

export default Navbar
