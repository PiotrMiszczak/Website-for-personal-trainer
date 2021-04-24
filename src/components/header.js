import * as React from "react"
import { Link } from "gatsby"
import '../scss/style.scss'
import logo from '../images/logo.png'



const Header = () => (
 <>
   <header className="header">
     <img className="logo" src={logo}></img>
   <h1 className="heading-primary">
                    <span class="heading-primary--main">Bartłomiej Pelc</span>
                    <span class="heading-primary--sub">Trener personalny</span>
                </h1>
   </header>
 </>
)

export default Header
