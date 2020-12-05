import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom'; //Link faz com que a página troque o componente sem precisar atualizar
import './Menu.css';

function BaseMenu(props){
    const { location } = props;
    return (
        <Navbar className="navbar-dark" bg="info" expand="lg" fixed="top">
            <Navbar.Brand>
                FullStackEletro REACT
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="item-menu"/>
            <Navbar.Collapse id="item-menu">
                <Nav activeKey={location.pathname} className="ml-auto mr-3">
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

const Menu = withRouter(BaseMenu); //Seta a propriedade por aqui

export default Menu 