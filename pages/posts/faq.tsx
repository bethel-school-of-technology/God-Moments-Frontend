import Layout from "../../components/layout"
import Header from '../../components/header'

export default function Faq() {
  return (
    <Layout>
      <Header/>
      <section>
        <p>
        <a href="#question1">1. What is God Moments?</a>
        </p>
        <p>
        <a href="#question2">2. How to contact support?</a>
        </p>
        <p>
        <a href="#question3">3. How to add a blog post?</a>
        </p>
        <p>
        <a href="#question4">4. How to update my account?</a>
        </p>
      </section>
    </Layout>
  )
}