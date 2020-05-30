import Layout from "../../components/layout"
import Header from '../../components/header'
import Link from 'next/link'

export default function Pray() {
  return (
    <Layout>
    <Header/>

      <section>
        <p>
          <img src="/images/notalone.jpg" width="700" height="500"/>

          <h2>How can we pray with you?</h2>
    
    <br/>
    <br/>
    
    <Link href="/posts/about">
      <a>→ Learn more about who we are </a>
    </Link>
        </p>
       
      </section>
    </Layout>
  )
}
