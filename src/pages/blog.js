import * as React from "react"
import { Link } from "gatsby"
import '../scss/style.scss'
import '../scss/normalize.css'
import Header from '../components/Header'
import Article from '../components/Article'





const BlogPage = () => {
    return(
        <> 
   <Header location="blog" />
   <section className='blog'>
   <Article />
   </section>
   

   
 </>
)}

export default BlogPage
