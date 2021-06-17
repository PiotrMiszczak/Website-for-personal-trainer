import * as React from "react"
import './style.scss'
import { Link, useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const Hello = () => {
  const { background } = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "gym.jpg" }) {
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


  const image = getImage(background)
  const backgroundImage = convertToBgImage(image)

  return (
    <>
      <BackgroundImage
        className="hello-bc"
        tag="section"
        {...backgroundImage}
        preserveStackingContext
      >
        <section className="hello">
          <div className="hello-content">
            <h2 className="hello-heading">Bartłomiej Pelc - trener</h2>
            <p className="hello-text">
              Zdrowe i wysportowane ciało wcale nie jest takie trudne do
              osiągnięcia. Nadwaga, złe samopoczucie i relacje z jedzeniem czy
              wszelkiego rodzaju bóle już nie będą Ci sprawiać problemów. Daj
              sobie szansę i zapisz się już teraz na bezpłatny trening bądź
              konsultację.
            </p>
            <Link to="#about">
              <button className="hello-button">Dowiedz się więcej</button>
            </Link>
          </div>
        </section>
      </BackgroundImage>
    </>
  )
}
export default Hello
