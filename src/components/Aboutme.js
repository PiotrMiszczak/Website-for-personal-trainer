import * as React from "react"
import '../scss/style.scss'
import about from '../images/about.jpg'




const Aboutme = () => (
 <>
  <section id="about" className="about">
      <h3 id="about" className="heading-secondary">O mnie</h3>
      <section className="about-item">
      <img className="about-image" src={about}></img>
      <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit erat vel velit condimentum porta. Cras eget nibh aliquam, efficitur ligula vel, ornare nisl. Etiam eu elit eget justo aliquets variuLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit erat vel velit condimentum porta. Cras eget nibh aliquam, efficitur ligula vel, ornare nisl. Etiam eu elit eget justo aliquets variu </p>
      </section>
      <section className="about-item">
      
      <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Curabitur suscipit erat vel velit condimentum porta. Cras eget nibh aliquam, efficitur ligula vel, ornare nisl.
       Etiam eu elit eget justo aliquets variuLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit erat vel velit condimentum porta.
        Cras eget nibh aliquam, efficitur ligula vel, ornare nisl. Etiam eu elit eget justo aliquets variu </p>
        <img className="about-image" src={about}></img>
      </section>

  </section>
 </>
)

export default Aboutme
