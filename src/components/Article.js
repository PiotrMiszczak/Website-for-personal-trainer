import * as React from "react"
import {useState} from 'react'
import '../scss/style.scss'
import photo from '../images/article.jpg'
import { useTransition, animated } from "react-spring";




function Article(){

    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac odio eget tortor eleifend tristique. Duis a leo sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean vestibulum egestas aliquam. Nam accumsan erat et condimentum ullamcorper. Etiam vel tellus ac augue ornare ultricies."
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
        <article onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className='article-preview'>
            {mask}
        <img className='article-preview--image' src={photo}></img>
        <div className='article-preview--content'>
        <span className='article-preview--title'>Dlaczego nie warto robić cardio?</span>
        <p className='article-preview--text'>`{text.slice(0,180)}...`</p>
        
        </div>
   
    </article>
    


    )
} 
  
    



export default Article
