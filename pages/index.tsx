import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const Index = () => (
  <>
  <Navbar expand="sm" bg="dark" variant="dark" fixed="top" sticky="top"> 
            <Navbar.Brand href="/">God Moments</Navbar.Brand>
            <Navbar.Brand href="/">
                <img
                src="/images/placeholder.jpeg" 
                width="45" 
                height="45"
                className="d-inline-block align-top"
                alt="God Moments Logo"
                />
            </Navbar.Brand>
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
  <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src="/images/hero-bg.jpg" width="79%" height="79%"/>
  </main>

  
  </>
)

export default Index
