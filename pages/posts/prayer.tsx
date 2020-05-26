import Head from "next/head";
import Layout from "../../components/layout";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Pray() {
  return (
    <Layout>
      <Head>
        <title>God Moments: Prayer Requests</title>
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




      <section>
        <p>
          <img src="/images/notalone.jpg" width="700" height="500"/>

          <h2>How can we pray with you?</h2>
        </p>
       
      </section>
    </Layout>
  )
}
