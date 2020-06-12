import Layout from '../../components/layout'
import Link from 'next/link'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import { Button } from 'react-bootstrap'


export default function Login() {
  return (
    <Layout>    
      <Head>
            <title>God Moments: Sign Up</title>
            <link rel="icon" href="/favicon.ico"/>
      </Head>
      <section className={utilStyles.h1}>
      <h1>Sign Up:</h1>
      </section>
      <section className={utilStyles.border}>
        <form >
      <section className={utilStyles.form}>
        <label id="firstName">First Name:</label><br/>
      <input type="text" id="firstName" placeholder="First Name"/><br/>
      <label id="lastName">Last Name:</label><br/>
      <input type="text" id="lastName" placeholder="Last Name"/><br/>
      <label id="birthDate">Birthday: </label><br/>
      <input type="date" id="birthDate" placeholder="Birthday"/><br/>
      <label id="email">Email:</label><br/>
      <input type="email" id="email" placeholder="Email Address"/><br/>
      <label id="userName">User Name:</label><br/>
      <input type="text" id="userName" placeholder="User Name"/><br/>
      <label id="passWord">Password:</label><br/>
      <input type="text" id="passWord" placeholder="Password"/><br/>
      <br/>
      <button name="submit" type="submit">Submit!</button>
      <br/>
      </section>
     </form>
      </section>

      <br/>
      <br/>
      
      <div>
          <Button href="/posts/login">
          <a>Log In</a>
          </Button>
        </div>

     
     </Layout>
  )
  }