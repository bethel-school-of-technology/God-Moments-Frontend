import Layout from "../../components/layout"
import Header from "../../components/header"
import Link from 'next/link'
<<<<<<< HEAD
import utilStyles from '../../styles/utils.module.css'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
=======
>>>>>>> 6dd8c324534c1b76fc6090d899a3fef21d68d4ae

export default function testimonies() {
  return (
    <Layout>
<<<<<<< HEAD
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
                        <NavDropdown.Item href="about">Who Are We</NavDropdown.Item>
                        <NavDropdown.Item href="faq">Help Me</NavDropdown.Item>
                        <NavDropdown.Item href="login">Login</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
    </div>



    <section className={utilStyles.h1}>
      <h1>Testimony Stream!</h1>
      </section>
      <br/>
      <h2>Add a Testimony or an Encounter Post</h2>
      <br/>
=======
      <Header/>

      <h3>
      <h3>The Kairos Coders welcome you to the God Moments Testimony Stream.</h3></h3>
      <br/>
      <h4>We are hard at work... or praying... or eating... or possibly sleeping? This page shall be running soon! :)</h4>
>>>>>>> 6dd8c324534c1b76fc6090d899a3fef21d68d4ae
      <br/>
      <section className={utilStyles.border}>
      
     <form>
       <br/>
     <section className={utilStyles.form}>
       <h4>Testimony Post Title:</h4>
       <textarea rows="1" cols="40" name="Title"></textarea><br/>
       <button name="submit" type="submit">Submit!</button><br/>
       <br/>
       <br/>
       <h4>Enter Testimony Blog:</h4>
      <textarea rows="10" cols="50" name="message"></textarea><br/>
      <button name="submit" type="submit">Submit!</button>
     </section>
     <br/>
     <br/>
     </form>
      </section>
     <br />
     <br/>
      <section className={utilStyles.borderSm}>
      <Link href="/posts/blog">
      <a>→ Check out our blogs! </a>
    </Link>
      </section>
    </Layout>
  );
}
// incorporate live stream/ Blog posting template on this page