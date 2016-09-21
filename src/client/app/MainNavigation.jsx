import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

require('../scss/MainNavigation.scss');

class MainNavigation extends React.Component {
  render () {
    return (
        <Navbar fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <a className="logo" href="#">lebweb.com</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Toggle />
            <Nav>
                <NavItem eventKey={1} href="#">Blog</NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    <Button bsStyle="custom">Contact Me</Button>
                </NavItem>
            </Nav>
        </Navbar>
    );
  }
}

export default MainNavigation; 