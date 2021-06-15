import * as React from "react"
import {useState} from 'react'
import '../scss/style.scss'
import photo from '../images/article.jpg'
import { useTransition, animated } from "react-spring";
import slugify from 'slugify'
import { Link } from "gatsby";




function Article(props){

  const slug = `/blog/${slugify(props.title)}`
    const [hover, setHover] = useState(false);
    const transitions = useTransition(hover, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    });
  
    const mask = transitions(
      (styles,item) =>
        item && (
          
          <animated.div
            style={styles}
            className="mask"
          ></animated.div>
        

        )
    );
    return(
      <Link className="link" to={slug}>
        <article onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className='article-preview'>
            {mask}
        <img className='article-preview--image' src={photo}></img>
        <div className='article-preview--content'>
        <span className='article-preview--title'>{props.title}</span>
        <p className='article-preview--text'>`{props.text.slice(0,105)}...`</p>
        
        </div>
   
    </article>
    </Link>
    


    )
} 
  
    



export default Article
