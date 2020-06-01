import Layout from "../../components/layout"
import Header from '../../components/header'
import Link from 'next/link'
<<<<<<< HEAD
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import utilStyles from '../../styles/utils.module.css';
import NavDropdown from "react-bootstrap/NavDropdown";
=======
>>>>>>> 6dd8c324534c1b76fc6090d899a3fef21d68d4ae

export default function Pray() {
  return (
    <Layout>
<<<<<<< HEAD
    <div style={{
        marginBottom: '5%'
    }}>
        <Head>
            <title>God Moments: Prayer</title>
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




      <section>
        <p>
          <img src="/images/notalone.jpg" width="500" height="300"/>
          <br/>
          <br/>
          <section className={utilStyles.h1}>
          <h1>How can we pray with you?</h1>
          <br/>
          <br/>
      </section>
      <section className={utilStyles.border}>
      
     <form>
     <section className={utilStyles.form}>
       
       <br/>
       <h4>Enter Prayer Request:</h4>
      <textarea rows="10" cols="50" name="message"></textarea><br/>
      <button name="submit" type="submit">Submit!</button>
     </section>
     </form>
     <br/>
     <br/>
      </section>
      <br/>
      <br/>
          <section className={utilStyles.borderSm}>
          <Link href="/posts/about">
=======
    <Header/>

      <section>
        <p>
          <img src="/images/notalone.jpg" width="700" height="500"/>

          <h2>How can we pray with you?</h2>
    
    <br/>
    <br/>
    
    <Link href="/posts/about">
>>>>>>> 6dd8c324534c1b76fc6090d899a3fef21d68d4ae
      <a>→ Learn more about who we are </a>
    </Link>
    </section>
        </p>
       
      </section>
    </Layout>
  )
}
