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
        <a href="#question1">1. What is God Moments?</a>
        </p>
        <p>
        <a href="#question2">2. How to contact support?</a>
        </p>
        <p>
        <a href="#question3">3. How to add a blog post?</a>
        </p>
        <p>
        <a href="#question4">4. How to update my account?</a>
        </p>
      </section>
    </Layout>
  )
}