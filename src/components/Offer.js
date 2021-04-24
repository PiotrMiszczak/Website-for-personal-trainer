import * as React from "react"
import '../scss/style.scss'
import about from '../images/about.jpg'
import diet from '../images/diet.jpg'
import doping from '../images/doping.jpg'
import workout from '../images/workout.jpg'




const Offer = () => (
 <>
  <section  className="offer">
      <h3 className="heading-secondary">Oferta</h3>
      <section className="offer-content">

          <div className="offer-item">
              <img src={diet}></img>
              <span>Dieta</span>
          </div>
          <div className="offer-item">
          <img src={workout}></img>
              <span>Trening</span>
          </div>
          <div className="offer-item">
          <img src={doping}></img>
              <span>Suplementacja</span>
          </div>
      </section>
     

  </section>
 </>
)

export default Offer