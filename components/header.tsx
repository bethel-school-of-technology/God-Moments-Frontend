import Head from 'next/head'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'

const Header = () => (
    <div style={{
        marginBottom: '5%'
    }}>
        <Head>
            <title>God Moments</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar expand="sm" bg="dark" variant="dark" fixed="top" sticky="top"> 
            <Navbar.Brand href="/">God Moments</Navbar.Brand>
            <Container>
            <Nav className="God-Moments">
                <Nav.Link href="posts/testimonies">
                <Button variant="outline-light">Testimonies</Button>
                </Nav.Link>
                <Nav.Link href="posts/blog">
                <Button variant="outline-light">Blog</Button>
                </Nav.Link>
                <Nav.Link href="posts/prayer">
                <Button variant="outline-light">Prayer</Button>
                    </Nav.Link>
                <Nav.Link href="posts/about">
                <Button variant="outline-light">About</Button>
                </Nav.Link>
                <Nav.Link href="posts/faq">
                <Button variant="outline-light">Help</Button> 
                </Nav.Link>
                <Nav.Link href="posts/login">
                    <Button variant="outline-light">Login</Button> 
                </Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        
    </div>
);

export default Header; 