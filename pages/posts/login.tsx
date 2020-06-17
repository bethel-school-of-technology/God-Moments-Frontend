import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import { Button } from 'react-bootstrap'
import { GetStaticProps } from 'next'


export default function Login() {
  return (
    <Layout>    
    <Head>
        <title>God Moments: Log In</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
    
      <section className={utilStyles.h1}>
      <h1>Log In:</h1>
      </section>
      <section className={utilStyles.border}>
      <form>
      <br/>
      <section className={utilStyles.form}>
      <label id="userName">User Name:</label><br/>
      <input type="text" id="userName" placeholder="Username"/><br/>
      <label id="passWord">Password:</label><br/>
      <input type="text" id="passWord" placeholder="Password"/><br/>
      <br/>
      <button name="submit" type="submit">Submit!</button>
      </section>
      <br/>
      </form>
      </section>
      <br/>
      <br/>

          <div>
          <Button href="/posts/signup">
          <a>No account? Register here</a>
          </Button>
        </div>
     </Layout>
  )
  }
/*
type Users = {
  email: string
  content: string
} 
export const getStaticProps: GetStaticProps = async () => {
const res = await fetch('https://localhost:8080/users')
const login: Users[] = await res.json()

return {
  props: { 
    users,
  },
}
}

*/