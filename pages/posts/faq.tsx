import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'

export default function Faq() {
  return (
    <Layout>
      <Head>
        <title>God Moments: Help</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Need Help?</h2>
      <br />
      <br />

      <section>
        <p>
          1. What is God Moments?
          <br />
          <br />
          An online blog site for Christians to meet, share their God moments,
          and leave prayer requests.
          <br />
          <br />
          2. How to contact support?
          <br />
          <br />
          To be determined.
        </p>
      </section>
      <br />

      <section>
        <p>
          3. How to add a blog post?
          <br />
          <br />
          Go to the blog page{" "}
          <Link href="blog">
            <a>Blog Page</a>
          </Link>
          <br />
          <br />
          4. How to update my account?
          <br />
          <br />
          To be determined.
          <br />
        </p>
      </section>
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

      <img src="/images/hammock.jpg" width="500" height="300"/>
      <br/>
    </Layout>
  );
}
