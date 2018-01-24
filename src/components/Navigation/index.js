import React, {Component} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import {Link} from 'react-router-dom'

import FontAwesome from 'react-fontawesome'

import './Navigation.css'

export default class Navigation extends Component {

    render() {
        const {isSiteNavOpen, toggleSiteNav} = this.props
        return (
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/">Brecht Carnewal</NavbarBrand>
                <NavbarToggler onClick={toggleSiteNav} />
                <Collapse isOpen={isSiteNavOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link-small"><Link to="/home">Home</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link-small"><Link to="/portfolio">Portfolio</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link-small"><Link to="/timeline">Timeline</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink target="_blank" href="https://www.linkedin.com/in/brechtcarnewal/">
                            <FontAwesome
                                className='primarycolor'
                                name='linkedin'
                                size='2x'
                            />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink target="_blank" href="https://github.com/Carnewal">
                            <FontAwesome
                                className='primarycolor'
                                name='github'
                                size='2x'
                            />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink target="_blank" href="https://twitter.com/BCarnewal">
                            <FontAwesome
                                className='primarycolor'
                                name='twitter'
                                size='2x'
                            />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink target="_blank" href="https://www.facebook.com/brecht.carnewal">
                            <FontAwesome
                                className='primarycolor'
                                name='facebook'
                                size='2x'
                            />
                        </NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
        </Navbar>

        )
    }
}