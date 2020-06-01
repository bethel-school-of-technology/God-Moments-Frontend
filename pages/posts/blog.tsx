import Layout from '../../components/layout'
import Header from '../../components/header'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import { GetStaticProps } from 'next'

export default function Blog({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
<Layout>
<<<<<<< HEAD
    <div style={{
        marginBottom: '5%'
    }}>
        <Head>
            <title>God Moments: Blog</title>
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


      <h1>Testimonies and Encounters</h1>
      <br/>
      <br/>
=======
  <Header/>
>>>>>>> 6dd8c324534c1b76fc6090d899a3fef21d68d4ae
      <section className={utilStyles.headingMd}> </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
<<<<<<< HEAD
          <br/>
          <br/>

      <section className={utilStyles.borderSm}>
=======
    
    <br/>
    <br/>
    
>>>>>>> 6dd8c324534c1b76fc6090d899a3fef21d68d4ae
    <Link href="/posts/prayer">
      <a>→ Need Prayer? </a>
    </Link>
    </section>

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

