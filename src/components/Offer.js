import * as React from "react"
import {useEffect} from 'react'
import '../scss/style.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'
import diet from '../images/diet.svg'
import doping from '../images/doping.svg'
import workout from '../images/workout.svg'




function Offer(){ 
AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  once: true, 
  delay:200,
  
})

    return(
 <>
  <section  className="offer">
      <h3 className="heading-secondary">Oferta</h3>
      <section className="offer-content">

          <div data-aos="new-animation-right" className="offer-item">
              <img className="offer-image" src={workout}></img>
              <p>Trening</p>
              <ul className="offer-list">
                  <li className="offer-list--item">Coś tam</li>
                  <li className="offer-list--item">Coś tam</li>
                  <li className="offer-list--item">Coś tam</li>
                  <li className="offer-list--item">Coś tam</li>
              </ul>
          </div>
          <div data-aos="fade" className="offer-item">
          <img className="offer-image" src={diet}></img>
          <p>Dieta</p>
          <ul className="offer-list">
          <li className="offer-list--item">Coś tam</li>
                  <li className="offer-list--item">Coś tam</li>
                  <li className="offer-list--item">Coś tam</li>
                  <li className="offer-list--item">Coś tam</li>
              </ul>
          </div>
          <div data-aos="new-animation-left" className="offer-item">
          <img className="offer-image" src={doping}></img>
          <p>Suplementacja</p>
          <ul className="offer-list">
          <li className="offer-list--item">Coś tam</li>
                  <li className="offer-list--item">Coś tam</li>
                  <li className="offer-list--item">Coś tam</li>
                  <li className="offer-list--item">Coś tam</li>
              </ul>
          </div>
      </section>
     

  </section>
 </>
)}

export default Offer