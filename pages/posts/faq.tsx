import Head from "next/head";
import Layout from "../../components/layout";

export default function Faq() {
  return (
    <Layout>
      <Head>
        <title>God Moments: FAQ</title>
      </Head>
      <section>
        <p>
          Question 1: What is God Moments?
        </p>
        <p>
          Question 2: How to contact support?
        </p>
        <p>
          Question 3: How to add a post?
        </p>
        <p>
          Question 4: How to update account?
        </p>
      </section>
    </Layout>
  )
}