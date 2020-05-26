import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link'

export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}:Blog</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>

      <div style={{
        marginBottom: '5%'
    }}>
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
        
        <Link href="./blog"><a>← Back to Blogs</a>
        </Link>
    </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}