import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../scss/style.scss"
import "../scss/normalize.css"
import Header from "../components/Header/Header.js"
import Article from "../components/Article/Article.js"
import Seo from "../components/seo"

const BlogPage = () => {
  return (
    <>
      <Seo title="Blog | Bartłomiej Pelc" />
      <Header location="blog" />
      <section className="blog">
        <StaticQuery
          query={graphql`
            query {
              pelcu {
                posts {
                  title
                  id
                  text
                  image {
                    url
                    id
                  }
                }
              }
            }
          `}
          render={({ pelcu: { posts } }) =>
            posts.map(item => (
              <Article
              key={item.id}
                title={item.title}
                text={item.text}
                image={item.image[1].url}
              />
            ))
          }
        />
      </section>
    </>
  )
}

export default BlogPage
