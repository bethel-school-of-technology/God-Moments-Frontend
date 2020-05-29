import Head from "next/head";
import Layout from "../../components/layout";
import Link from 'next/link'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function FirstPost() {
  return (
    <Layout>
    <div style={{
        marginBottom: '5%'
    }}>
        <Head>
            <title>God Moments: Testimonies</title>
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
                        <NavDropdown.Item href="faq">Help</NavDropdown.Item>
                        <NavDropdown.Item href="login">Login</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
    </div>

      <h3>
      <h3>The Kairos Coders welcome you to the God Moments Testimony Stream.</h3></h3>
      <br/>
      <h4>We are hard at work... or praying... or eating... or possibly sleeping? This page shall be running soon! :)</h4>
      <br/>
      
      <Link href="/posts/blog">
      <a>→ Check out our blogs! </a>
    </Link>

    </Layout>
  );
}
// incorporate live stream/ Blog posting template on this page