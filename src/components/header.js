import * as React from "react"
import { Link } from "gatsby"
import '../scss/style.scss'
import insta from '../images/instagram.svg'
import face from '../images/facebook.svg'
import phone from '../images/phone.svg'
import mail from '../images/mail.svg'
import {StaticImage} from 'gatsby-plugin-image'



const Header = (props) => (
 <>
   <header className="header">
     <div className="header-top">
       <a target="_blank" href='https://www.instagram.com/pelcbartlomiej/?hl=pl' className="link link-social"><img className='icon icon-social' src={insta}></img></a>
       <a target="_blank" href='https://www.facebook.com/TrenerBartlomiejPelc' className=" link link-social"><img className='icon icon-social' src={face}></img></a>
      <img className='icon' src={phone}></img><span>731 558 761</span>
      <img className='icon' src={mail}></img><span>pro.pelcu@gmail.com
</span> 

     </div>
     <div className="header-bottom">
       <div className="heading-container"><StaticImage src='../images/logo.png' imgClassName="logo" alt="logo icon" loading='eager' />
   <h1 className="heading-primary">
                    <span className="heading-primary--main">Bartłomiej Pelc</span>
                    <span className="heading-primary--sub">Trener personalny</span>
                </h1>
                </div>
                <div className="link-wrapper">
                <Link to={props.location=='home' ? '/blog' : '/'} className="link link-blog">{props.location=='home' ? 'BLOG' : 'HOME'}</Link>
               {props.location == 'post' ? <Link className="link link-blog" to='/blog'>BLOG</Link> : null}
               </div>
                </div>
    
   </header>
 </>
)

export default Header
