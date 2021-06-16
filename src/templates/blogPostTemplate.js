import * as React from "react"
import { Link } from "gatsby"
import "../scss/style.scss"
import "../scss/normalize.css"
import Header from "../components/Header"
import Seo from "../components/seo"

function blogPostTemplate({ pageContext: { data } }) {
  const src = data.image[0].url.toString()
  return (
    <>
      <Seo title={data.title} />
      <Header location="post" />
      <div
        style={{
          backgroundImage: `url(${src})`,
          width: "100%",
          height: "70vh",
          backgroundPosition: "30% 30%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <article className="article-post">
        <h1 className="article-post--title">{data.title}</h1>

        <p className="article-post--text">{data.text}</p>
      </article>
    </>
  )
}

export default blogPostTemplate
