import * as React from "react"
import "../scss/style.scss"
import about from "../images/about.jpg"

const Aboutme = () => (
  <>
    <section id="about" className="about">
      <h3 id="about" className="heading-secondary">
        O mnie
      </h3>
      <div className="about-content">
        <img alt="profile photo" src={about} className="about-image" />
        <p className="about-text">
          Treningiem siłowym zajmuję się od 5 lat. Sport od zawsze był obecny w
          moim życiu począwszy od judo, które uprawiałem przez 7 lat już od
          czasów przedszkolnych po piłkę nożną, z którą przygoda trwała przez 4
          lata aż do momentu, gdy pojawiła się kontuzja i to właśnie wtedy
          pierwszy raz zainteresowałem się treningiem z obciążeniem.
          Doskonalenie własnych umiejętności oraz nabywanie wiedzy z zakresu
          żywienia, planowania ćwiczeń i suplementacji a także zdrowego stylu
          życia i podejścia mentalnego jest dla mnie bardzo ważne, ponieważ
          dzięki tym narzędziom jestem w stanie pomóc innym jak również i sobie.
        </p>
      </div>
    </section>
  </>
)

export default Aboutme
