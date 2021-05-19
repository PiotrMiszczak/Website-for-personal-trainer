import * as React from "react"
import '../scss/style.scss'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {getImage} from 'gatsby-plugin-image'
import {convertToBgImage} from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'




const Hello = () => {

    const {background} = useStaticQuery(graphql`
    query {
        background:file(relativePath: {eq: "gym.jpg"}) {
            id
            childImageSharp {
              gatsbyImageData(
                quality: 60
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
                backgroundColor: "black"
              )
            }
          }
      }
      `)

      console.log(background)

      const image = getImage(background)
      const backgroundImage = convertToBgImage(image)
    

return(
 <>
 <BackgroundImage className="hello-bc" tag='section' {...backgroundImage} preserveStackingContext>
  <section className="hello">
     
      <div className="hello-content">
          <h2 className="hello-heading">Trener personalny</h2>
          <p className="hello-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit erat vel velit condimentum porta. Cras eget nibh aliquam, efficitur ligula vel, ornare nisl. Etiam eu elit eget justo aliquet varius</p>
         <Link to='#about'><button className="hello-button">Dowiedz się więcej</button></Link>
      </div>

  </section>
  </BackgroundImage>
 </>
)
    }
export default Hello
