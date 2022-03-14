import React from 'react';
import BNavbar from 'react-bootstrap/Navbar';
import BContainer from 'react-bootstrap/Container';
import BNav from 'react-bootstrap/Nav';
import Logo from './../assets/img/logo.png';

const propTypes = {};
const defaultProps = {};

const Navbar = () => {
    return (
        <BNavbar bg='dark' variant='dark' sticky='top'>
            <BContainer className='w-50'>
                <BNavbar.Brand href='#home'>
                    <img src={Logo} width='30' height='30' className='d-inline-block align-top' alt='Logo' />
                </BNavbar.Brand>
                <BNav className='justify-content-end' id='navbar'>
                    <BNav.Link href='#home'>Home</BNav.Link>
                    <BNav.Link href='#music'>Musik</BNav.Link>
                    <BNav.Link href='#guests'>Gäste</BNav.Link>
                </BNav>
            </BContainer>
        </BNavbar>
    );
};

Navbar.displayName = Navbar.name;
Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
