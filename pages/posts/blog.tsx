import Layout from '../../components/layout'
import Header from '../../components/header'
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
  <Header/>
      <section className={utilStyles.headingMd}> </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    
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
    
    <br/>
    <br/>
    
    <Link href="/posts/prayer">
      <a>→ Need Prayer? </a>
    </Link>
    

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

