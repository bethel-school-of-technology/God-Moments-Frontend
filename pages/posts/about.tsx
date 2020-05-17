import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>God Moments: About Page</title>
      </Head>
      <section className={utilStyles.headingMd}>
        
        <p>
          An online blog site for Christians to meet, share their God moments, and leave prayer requests.
          Today socity with all of our socal distancing, and socal media platforms available out there. Kairos 
          Coders has designed a platform for those who are looking for and who have experienced their own God
          moments to share them with others. One of the most powerful forces is the "Word of Our Testimony" 
          combined with the "Blood of the Lamb" and "not loving our own lives" results in overcoming our oldest
          enemy. Revelation 12:11 "And they overcame him by the blood of the Lamb, and by  the word of their 
          testimony; and they loved not their own lives unto death"
          </p>
      </section>
    </Layout>
  )
}