import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>God Moments: Who Are We</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={utilStyles.h1}>
        <h1>Who Are We:</h1>
      </section>
      <br />
      <br />
      <section>
        <p>
          God Moments is an online blog site for Christians to meet, share their
          God moments, and leave prayer requests. Today society with all of our
          socal distancing, and social media platforms available out there.
          Kairos Coders has designed a platform for those who are looking for
          and who have experienced their own God moments to share them with
          others. One of the most powerful forces is the "Word of Our Testimony"
          combined with the "Blood of the Lamb" and "not loving our own lives"
          results in overcoming our oldest enemy. Revelation 12:11 "And they
          overcame him by the blood of the Lamb, and by the word of their
          testimony; and they loved not their own lives unto death"
        </p>
      </section>
      <br />
      <br />

      <Link href="/posts/login">
        <a>→ Login Here</a>
      </Link>
    </Layout>
  );
}
