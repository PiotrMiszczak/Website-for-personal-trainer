import * as React from "react"
import { Link } from "gatsby"
import '../scss/style.scss'
import '../scss/normalize.css'
import Header from '../components/Header'
import Hello from '../components/Hello'
import About from "../components/Aboutme"
import Offer from "../components/Offer"



const IndexPage = () => (
 <>
   <Header />
   <Hello />
   <About />
   <Offer />
   
 </>
)

export default IndexPage
