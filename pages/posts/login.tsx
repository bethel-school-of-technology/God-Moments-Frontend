import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";

export default function Login() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h3>The Kairos Coders welcome you to God Moments</h3>
      <h2>Sign-In Here:</h2>
    </Layout>
  )
}
