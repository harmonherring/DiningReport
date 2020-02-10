import React from 'react';
import styled from 'styled-components';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

const DiningNavbar = styled(Navbar)`
    border-bottom: 2px solid #202d3b;
    padding: 10px 16px;
`

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <DiningNavbar className="diningreport-nav" color="primary" dark expand="md">
                <Container>
                <NavbarBrand href="/">Dining<strong>Report</strong></NavbarBrand>
                <NavbarToggler onClick={() => this.toggle()} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/harmonherring/DiningReport">Github</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Container>
            </DiningNavbar>
        );
    }
}

export default Navigation;