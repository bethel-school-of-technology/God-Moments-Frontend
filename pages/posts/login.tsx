<<<<<<< HEAD
import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from '../../styles/utils.module.css'
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
          <script>    
           
            <link rel="icon" href="/favicon.ico"/>
           
            </script>
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
    
      <h4>Log-In Here:</h4>
=======
import Layout from '../../components/layout'
import Header from '../../components/header'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'


export default function Login() {
  return (
    <Layout>    
    <Header/>
    
      <h2>The Kairos Coders welcome you to God Moments</h2>
      <h4>Log In:</h4>
>>>>>>> 6dd8c324534c1b76fc6090d899a3fef21d68d4ae
      <section className={utilStyles.border}>
      <form>
      <br/>
      <section className={utilStyles.form}>
      <label id="userName">User Name:</label><br/>
      <input type="text" id="userName" placeholder="Username"/><br/>
      <label id="passWord">Password:</label><br/>
      <input type="text" id="passWord" placeholder="Password"/><br/>
      <br/>
      <button name="submit" type="submit">Submit!</button>
      </section>
      <br/>
      </form>
      </section>
      <br/>
      <br/>
<<<<<<< HEAD
      <br/>
      <h4>New User:</h4>
      <section className={utilStyles.border}>
        <form >
          <br/>
      <section className={utilStyles.form}>
        <label id="firstName">First Name:</label><br/>
      <input type="text" id="firstName" placeholder="First Name"/><br/>
      <label id="lastName">Last Name:</label><br/>
      <input type="text" id="lastName" placeholder="Last Name"/><br/>
      <label id="birthDate">Birthday: </label><br/>
      <input type="date" id="birthDate" placeholder="Birthday"/><br/>
      <label id="email">Email:</label><br/>
      <input type="email" id="email" placeholder="Email Address"/><br/>
      <label id="userName">User Name:</label><br/>
      <input type="text" id="userName" placeholder="User Name"/><br/>
      <label id="passWord">Password:</label><br/>
      <input type="text" id="passWord" placeholder="Password"/><br/>
      <br/>
      <button name="submit" type="submit">Submit!</button>
      <br/>
      </section>
      <br/>
     </form>
      </section>
      
=======
>>>>>>> 6dd8c324534c1b76fc6090d899a3fef21d68d4ae

          <div>
          <Link href="/posts/signup">
          <a>No account? Register here</a>
          </Link>
        </div>

     </Layout>
  )
  }