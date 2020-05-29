import Head from "next/head";
import Layout from "../../components/layout";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function Faq() {
  return (
    <Layout>
    <div style={{
        marginBottom: '5%'
    }}>
        <Head>
            <title>God Moments: FAQ</title>
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


      <section>
        <p>
        <a href="#question1">1. What is God Moments?</a>
        </p>
        <p>
        <a href="#question2">2. How to contact support?</a>
        </p>
        <p>
        <a href="#question3">3. How to add a blog post?</a>
        </p>
        <p>
        <a href="#question4">4. How to update my account?</a>
        </p>
      </section>
    </Layout>
  )
}