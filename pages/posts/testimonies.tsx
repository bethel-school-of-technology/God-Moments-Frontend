import Layout from "../../components/layout"
import Header from "../../components/header"
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'

export default function testimonies() {
  return (
    <Layout>
      <Header/>

      <h3>
      <h3>The Kairos Coders welcome you to the God Moments Testimony Stream.</h3></h3>
      <br/>
      <h4>We are hard at work... or praying... or eating... or possibly sleeping? This page shall be running soon! :)</h4>
      <br/>
      <section className={utilStyles.border}>
      
     <form>
       <br/>
     <section className={utilStyles.form}>
       <h4>Testimony Post Title:</h4>
       <textarea rows="1" cols="40" name="Title"></textarea><br/>
       <button name="submit" type="submit">Submit!</button><br/>
       <br/>
       <br/>
       <h4>Enter Testimony Blog:</h4>
      <textarea rows="10" cols="50" name="message"></textarea><br/>
      <button name="submit" type="submit">Submit!</button>
     </section>
     <br/>
     <br/>
     </form>
      </section>
     <br />
     <br/>
      <section className={utilStyles.borderSm}>
      <Link href="/posts/blog">
      <a>→ Check out our blogs! </a>
    </Link>
      </section>
    </Layout>
  );
}
// incorporate live stream/ Blog posting template on this page