import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import { Button } from 'react-bootstrap';

export default function Faq() {
  return (
    <Layout>
      <Head>
        <title>God Moments: FAQ</title>
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

      <img src="/images/hammock.jpg" width="500" height="300"/>
      <br/>
      <br/>
      <br/>
      <section>
    <p>
        3. How to add a blog post?<br/>
        <br/>
        Go to the blog page <Button href="blog"><a>Blog Page</a></Button><br/>
       <br/>
       4. How to update my account?<br/>
       <br/>
       To be determined.<br/>
       </p>
      </section>

    </Layout>
  );
}
