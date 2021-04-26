import * as React from "react"
import '../scss/style.scss'
import about from '../images/about.jpg'




const Aboutme = () => (
 <>
  <section id="about" className="about">
      <h3 id="about" className="heading-secondary">O mnie</h3>
     <div className="about-content">
<img src={about} className="about-image" />
<p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit erat vel velit condimentum porta. Cras eget nibh aliquam,
   efficitur ligula vel, ornare nisl. Etiam eu elit eget justo aliquet varius.
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit erat vel velit condimentum porta. 
   Cras eget nibh aliquam, efficitur ligula vel, ornare nisl. Etiam eu elit eget justo aliquet varius</p>

     </div>

  </section>
 </>
)

export default Aboutme
