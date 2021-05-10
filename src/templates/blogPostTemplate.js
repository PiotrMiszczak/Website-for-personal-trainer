import * as React from "react"
import {Link} from 'gatsby'
import '../scss/style.scss'
import '../scss/normalize.css'
import Header from '../components/Header'





function blogPostTemplate({pageContext:{data}}){
    const src = (data.image[0].url).toString()
    return(
 <>

   <Header location='blog' />
   <div style={{backgroundImage:`url(${src})`,width:'100%', height:'50vh', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
   <article className='article-post'>
   <h1 className='article-post--title'>{data.title}</h1>
       
  
       <p className='article-post--text'>{data.text}</p>
   </article>
  
   
 </>
)}

export default blogPostTemplate;
