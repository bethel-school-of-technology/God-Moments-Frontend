<<<<<<< HEAD
import Head from "next/head";
import Layout from "../../components/layout";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Link from "next/link";
=======
import Layout from "../../components/layout"
import Header from '../../components/header'
>>>>>>> 6dd8c324534c1b76fc6090d899a3fef21d68d4ae

export default function Faq() {
  return (
    <Layout>
<<<<<<< HEAD
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
                        <NavDropdown.Item href="about">Who Are We</NavDropdown.Item>
                        <NavDropdown.Item href="faq">Help Me</NavDropdown.Item>
                        <NavDropdown.Item href="login">Login</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
    </div>
      <h2>Help Me???</h2>
      <br/>
      <br/>

=======
      <Header/>
>>>>>>> 6dd8c324534c1b76fc6090d899a3fef21d68d4ae
      <section>
        <p>
        1. What is God Moments?<br/>
        <br/>
        An online blog site for Christians to meet, share their God moments, and leave prayer requests.<br/>
        <br/>
        2. How to contact support?<br/>
        <br/>
        To be determined.
        </p>
        
      </section>

      <img src="/images/hammock.jpg" width="500" height="300"/>
      <br/>
      <br/>
      <br/>
      <section>
    <p>
        3. How to add a blog post?<br/>
        <br/>
        Go to the blog page <Link href="blog"><a>Blog Page</a></Link><br/>
       <br/>
       4. How to update my account?<br/>
       <br/>
       To be determined.<br/>
       </p>
      </section>

    </Layout>
  )
}