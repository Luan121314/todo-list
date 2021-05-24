import React from 'react';
import { Button, Form, FormControl, Navbar as NavBarBootstrap } from 'react-bootstrap';
import manifest from '../../manifest';

const NavBar = (): JSX.Element => {
    return (
        <NavBarBootstrap bg="light" expand="lg">
            <NavBarBootstrap.Brand href="#home">{manifest.title}</NavBarBootstrap.Brand>
            <NavBarBootstrap.Toggle aria-controls="basic-navbar-nav" />
            <NavBarBootstrap.Collapse id="basic-navbar-nav" className="justify-content-between">
                <div />
                <Form className="d-flex">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </NavBarBootstrap.Collapse>
        </NavBarBootstrap>
    );
};

export default NavBar;
