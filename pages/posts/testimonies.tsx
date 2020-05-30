import Layout from "../../components/layout"
import Header from "../../components/header"
import Link from 'next/link'

export default function FirstPost() {
  return (
    <Layout>
      <Header/>

      <h3>
      <h3>The Kairos Coders welcome you to the God Moments Testimony Stream.</h3></h3>
      <br/>
      <h4>We are hard at work... or praying... or eating... or possibly sleeping? This page shall be running soon! :)</h4>
      <br/>
      
      <Link href="/posts/blog">
      <a>→ Check out our blogs! </a>
    </Link>

    </Layout>
  );
}
// incorporate live stream/ Blog posting template on this page