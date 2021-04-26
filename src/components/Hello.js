import * as React from "react"
import '../scss/style.scss'




const Hello = () => {
    
function scroll(){
    console.log('skrol')
    window.scroll({
        top:850,
        behavior:'smooth'
    })
}
return(
 <>
  <section className="hello">
      <div className="hello-content">
          <h2 className="hello-heading">Trener personalny</h2>
          <p className="hello-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit erat vel velit condimentum porta. Cras eget nibh aliquam, efficitur ligula vel, ornare nisl. Etiam eu elit eget justo aliquet varius</p>
         <button onClick={scroll} className="hello-button">Dowiedz się więcej</button>
      </div>

  </section>
 </>
)
    }
export default Hello
