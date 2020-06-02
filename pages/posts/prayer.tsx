import Layout from "../../components/layout";
import Header from "../../components/header";
import Head from "next/head";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";

export default function Pray() {
  return (
    <Layout>
      <Header />
      <Head>
        <title>God Moments: Prayer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <p>
          <img src="/images/notalone.jpg" width="700" height="500" />
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

          <Link href="/posts/about">
            <a>→ Learn more about who we are </a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
