import Head from 'next/head';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => (
    <div style={{
        marginBottom: '5%'
    }}>
        <Head>
            <title>God Moments</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">God Moments</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <NavDropdown title="Home" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="posts/testimonies">Testimonies</NavDropdown.Item>
                        <NavDropdown.Item href="posts/blog">Blog</NavDropdown.Item>
                        <NavDropdown.Item href="posts/prayer">Prayer</NavDropdown.Item>
                        <NavDropdown.Item href="posts/about">About</NavDropdown.Item>
                        <NavDropdown.Item href="posts/faq">FAQ</NavDropdown.Item>
                        <NavDropdown.Item href="posts/login">Login</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
    </div>
);

export default Header; 