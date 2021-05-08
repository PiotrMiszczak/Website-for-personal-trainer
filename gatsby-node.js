const path = require(`path`);
const slugify = require('slugify')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogPostTemplate.js`)
 
 const blogPostQuery = await graphql(`{pelcu{
    posts{
  
    title,
    text,
      image{
      
  url
    }
    
    }}}`)

    blogPostQuery.data.pelcu.posts.forEach(post => {
        createPage({
            path:slugify(post.title),
            component: blogPostTemplate,
            context:{
                data:post,
            }
        })
        
    });
    
}