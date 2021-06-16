import * as React from "react"
import { useEffect } from "react"
import "../scss/style.scss"
import AOS from "aos"
import "aos/dist/aos.css"
import diet from "../images/diet.svg"
import doping from "../images/doping.svg"
import workout from "../images/workout.svg"

function Offer() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out", // default easing for AOS animations
      once: true,
      delay: 200,
    })
  }, [])

  return (
    <>
      <section className="offer">
        <h3 className="heading-secondary">Oferta</h3>
        <section className="offer-content">
          <div data-aos="new-animation-right" className="offer-item">
            <img
              alt="man doing pushups"
              className="offer-image"
              src={workout}
            ></img>
            <p>Trening</p>
            <div className="offer-list-wrapper">
              <ul className="offer-list">
                <li className="offer-list--item">
                  Rozpisanie indywidualnego planu pod słabe punkty
                </li>
                <li className="offer-list--item">
                  Trening personalny na terenie <b>Warszawy</b>
                </li>
                <li className="offer-list--item">
                  Konsultacja ze szczegółowym omówieniem ćwiczeń i techniki
                </li>
              </ul>
            </div>
          </div>
          <div data-aos="fade" className="offer-item">
            <img alt="plate of food" className="offer-image" src={diet}></img>
            <p>Dieta</p>
            <div className="offer-list-wrapper">
              <ul className="offer-list">
                <li className="offer-list--item">
                  Rozpisanie posiłków z uwzględnieniem kaloryczności i
                  makroskładników
                </li>
                <li className="offer-list--item">
                  Dietoterapia z wprowadzeniem dobrych nawyków żywieniowych
                </li>
                <li className="offer-list--item">
                  Program na zrzucenie kilogramów jedząc to co się lubi
                </li>
              </ul>
            </div>
          </div>
          <div data-aos="new-animation-left" className="offer-item">
            <img
              alt="container of pills"
              className="offer-image"
              src={doping}
            ></img>
            <p>Suplementacja</p>
            <div className="offer-list-wrapper">
              <ul className="offer-list">
                <li className="offer-list--item">
                  Rozpisanie suplementacji pod indywidualne cele
                </li>
                <li className="offer-list--item">
                  Uzupełnienie niedoborów i utrzymywanie poziomu witamin w
                  normie
                </li>
                <li className="offer-list--item">
                  Konsultacja i omówienie tych suplementów, które faktycznie
                  działają
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Offer
