import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

class BottomNavigation extends React.Component {
  render () {
    return (
        <Navbar fixedBottom>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    <p>Powered by Docker, Kubernetes, Google Container Service, React, Flux, Bootstrap</p>
                </NavItem>
            </Nav>
        </Navbar>
    );
  }
}

export default BottomNavigation; 