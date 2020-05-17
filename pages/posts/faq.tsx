import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>God Moments: FAQ</title>
      </Head>
      <section className={utilStyles.headingMd}>
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