import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function Login() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    
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
                        <NavDropdown.Item href="testimonies">Testimonies</NavDropdown.Item>
                        <NavDropdown.Item href="blog">Blog</NavDropdown.Item>
                        <NavDropdown.Item href="prayer">Prayer</NavDropdown.Item>
                        <NavDropdown.Item href="about">About</NavDropdown.Item>
                        <NavDropdown.Item href="faq">FAQ</NavDropdown.Item>
                        <NavDropdown.Item href="login">Login</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
    </div>

      <h3>The Kairos Coders welcome you to God Moments</h3>
      <h2>Sign-In Here:</h2>
    </Layout>
  )
}
