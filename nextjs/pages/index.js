import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Testimonies</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, do you have a testimony that you would like to share with like-minded people who might be encouraged by a recent or current struggle you have been dealing with?</p>
        <p>If the answer to the above question is <strong><em>Yes</em></strong>, then this is the place for you where you can grow and be encouraged to be the best version you can be of yourself</p>
        <form>
          <input type = "text" id = "fName"  placeholder = "First Name:"></input><br />
        <input type = "text"  id = "lName" placeholder = "Last Name: "></input> <br />
        <textarea rows = "30" cols= "200" name = "testimony" placeholder = "Testimony:"></textarea>
        </form>
        
        <button type = "submit" value= "submit">Submit</button>
        <p>P.S. you would like to be anonymous, just fill in description entry box.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}