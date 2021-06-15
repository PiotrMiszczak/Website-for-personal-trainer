import * as React from "react"
import { Link } from "gatsby"
import '../scss/style.scss'
import '../scss/normalize.css'
import Header from '../components/Header'
import Hello from '../components/Hello'
import About from "../components/Aboutme"
import Offer from "../components/Offer"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import Seo from '../components/seo'




const IndexPage = () => (

  
 <>
 
 <Seo />
   <Header location='home' />
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
