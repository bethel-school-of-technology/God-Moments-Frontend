import Head from "next/head";
import Layout from "../../components/layout";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>God Moments: Testimonies</title>
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




      <h1>Testimony Stream!</h1>
      <br/>
      <h3>Under Contruction</h3>
      <br/>
      <h4>The Kairos Coders are hard at work... or praying... or eating... or possibly sleeping? This page shall be running soon! :)</h4>
      <br/>
      <img src="/images/hammock.jpg" width="500" height="300"/>
    </Layout>
  );
}
// incorporate live stream/ Blog posting template on this page