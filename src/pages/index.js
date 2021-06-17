import * as React from "react"
import "../scss/style.scss"
import "../scss/normalize.css"
import Header from "../components/Header/Header.js"
import Hello from "../components/Hello/Hello.js"
import About from "../components/Aboutme/Aboutme.js"
import Offer from "../components/Offer/Offer.js"
import ContactForm from "../components/ContactForm/ContactForm.js"
import Footer from "../components/Footer/Footer.js"
import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <Seo />
    <Header location="home" />
    <main className="main">
      <Hello />
      <About />
      <Offer />
      <ContactForm />
    </main>
    <Footer />
  </>
)

export default IndexPage
