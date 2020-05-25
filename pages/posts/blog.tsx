import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import { GetStaticProps } from 'next'

export default function Blog({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
<Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h3>The Kairos Coders welcome you to God Moments</h3>
        <p>
          ({' '} <Link href="./testimonies"><a> Testimony Stream!  </a></Link>)
          ({' '} <Link href="./posts/about"><a> Our Mission  </a></Link>)
          ({' '} <Link href="./posts/prayer"><a> Prayer Requests  </a></Link>)
          ({' '} <Link href="./posts/faq"><a> FAQ  </a></Link>)
          ({' '} <Link href="./posts/login"><a> Log in  </a></Link>)
        </p> 
      <section className={utilStyles.headingMd}> </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
     
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

