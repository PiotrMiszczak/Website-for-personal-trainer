import * as React from "react"
import { Link } from "gatsby"
import '../scss/style.scss'
import '../scss/normalize.css'
import HeaderComponent from '../components/Header'
import HelloComponent from '../components/Hello'



const IndexPage = () => (
 <>
   <HeaderComponent />
   <HelloComponent />
 </>
)

export default IndexPage
