import * as React from "react"
import '../scss/style.scss'
import {Link} from 'gatsby'




const Hello = () => {
    

return(
 <>
  <section className="hello">
      <div className="hello-content">
          <h2 className="hello-heading">Trener personalny</h2>
          <p className="hello-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit erat vel velit condimentum porta. Cras eget nibh aliquam, efficitur ligula vel, ornare nisl. Etiam eu elit eget justo aliquet varius</p>
         <Link to='#about'><button className="hello-button">Dowiedz się więcej</button></Link>
      </div>

  </section>
 </>
)
    }
export default Hello
