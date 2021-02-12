import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (
            <Navbar className="navbar-dark" bg="info" expand="lg" fixed="top">
                <Navbar.Brand>
                    FullStackEletro REACT
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="item-menu"/>
                        <Navbar.Collapse id="item-menu">
                            <Nav className="ml-auto mr-3">
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/" to = "/">Página inicial</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/produtos" to = "/produtos">Produtos</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/lojas" to = "/lojas">Nossas lojas</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/contatos" to = "/contatos">Contatos</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;