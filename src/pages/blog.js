import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import '../scss/style.scss'
import '../scss/normalize.css'
import Header from '../components/Header'
import Article from '../components/Article'





const BlogPage = () => {
    return(
        <> 
   <Header location="blog" />
   <section className='blog'>
     <StaticQuery query={graphql`query{pelcu{
  posts{

  title,
  text,
    image{
    
url
  }
  
  }}}`} render={({pelcu: {posts}})=>posts.map(item=><Article title={item.title} text={item.text} image={item.image[0].url} />)} />
   
   </section>
   

   
 </>
)}

export default BlogPage
