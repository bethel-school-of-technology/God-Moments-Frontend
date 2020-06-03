import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'

const name = 'God Moments'
export const siteTitle = 'God Moments'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
      <Navbar expand="sm" bg="dark" variant="dark" fixed="top" sticky="top"> 
            <Navbar.Brand href="/">God Moments</Navbar.Brand>
            <Container>
            <Nav className="God-Moments">
                <Nav.Link href="./testimonies">
                <Button variant="outline-light">Testimonies</Button>
                </Nav.Link>
                <Nav.Link href="./blog">
                <Button variant="outline-light">Blog</Button>
                </Nav.Link>
                <Nav.Link href="./prayer">
                <Button variant="outline-light">Prayer</Button>
                    </Nav.Link>
                <Nav.Link href="./about">
                <Button variant="outline-light">About</Button>
                </Nav.Link>
                <Nav.Link href="./faq">
                <Button variant="outline-light">Help</Button> 
                </Nav.Link>
                <Nav.Link href="./login">
                    <Button variant="outline-light">Login</Button> 
                </Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Bringing heaven down to the internet."
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
      
        {home ? (
          <>
            <img
              src="/images/placeholder.jpeg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/placeholder.jpeg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}