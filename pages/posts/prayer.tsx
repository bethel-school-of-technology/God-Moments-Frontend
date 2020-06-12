import Layout from '../../components/layout'
import Head from 'next/head'
import Link from "next/link"
import utilStyles from '../../styles/utils.module.css'
import { Button } from 'react-bootstrap';

export default function Pray() {
  return (
    <Layout>
      <Head>
        <title>God Moments: Prayer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <p>
          <img src="/images/notalone.jpg" width="500" height="300" />
          <section className={utilStyles.h1} />
          <h1>How can we pray with you?</h1>
          <br />
          <br />
          <form>
            <section className={utilStyles.form}>
              <br />
              <h4>Enter Prayer Request:</h4>
              <textarea rows="10" cols="50" name="message"></textarea>
              <br />
              <button name="submit" type="submit">
                Submit!
              </button>
            </section>
          </form>
          <br />
          <br />
          <br />
          <br />

          <Button href="/posts/about">
            <a>→ Learn more about who we are </a>
          </Button>
        </p>
      </section>
    </Layout>
  );
}
