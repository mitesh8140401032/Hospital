import logo from './image/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src={ logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link href="#deets">Home</Nav.Link>
                        <Nav.Link  href="#memes">Gallery</Nav.Link>
                        <Nav.Link href="#memes">Tearm</Nav.Link>
                        <Nav.Link href="#memes">About</Nav.Link>
                        <Nav.Link href="#memes">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

