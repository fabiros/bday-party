import React from 'react';
import BNavbar from 'react-bootstrap/Navbar';
import BContainer from 'react-bootstrap/Container';
import BNav from 'react-bootstrap/Nav';

const propTypes = {};
const defaultProps = {};

const Navbar = () => {
    return (
        <BNavbar bg='dark' variant='dark'>
            <BContainer>
                <BNavbar.Brand href='#home'>Navbar</BNavbar.Brand>
                <BNav className='me-auto'>
                    <BNav.Link href='#home'>Home</BNav.Link>
                    <BNav.Link href='#features'>Features</BNav.Link>
                    <BNav.Link href='#pricing'>Pricing</BNav.Link>
                </BNav>
            </BContainer>
        </BNavbar>
    );
};

Navbar.displayName = Navbar.name;
Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
