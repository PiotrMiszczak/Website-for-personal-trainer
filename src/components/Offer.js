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
              <img className="offer-image" src={diet}></img>
              <p>Trening</p>
              <ul className="offer-list">
                  <li className="offer-list--item">Coś tam</li>
                  <li className="offer-list--item">Coś tam</li>
                  <li className="offer-list--item">Coś tam</li>
                  <li className="offer-list--item">Coś tam</li>
              </ul>
          </div>
          <div className="offer-item">
          <img className="offer-image" src={workout}></img>
          <p>Dieta</p>
          <ul className="offer-list">
          <li className="offer-list--item">Coś tam</li>
                  <li className="offer-list--item">Coś tam</li>
                  <li className="offer-list--item">Coś tam</li>
                  <li className="offer-list--item">Coś tam</li>
              </ul>
          </div>
          <div className="offer-item">
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
)

export default Offer