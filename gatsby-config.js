module.exports = {
  siteMetadata: {
    title: `Bartłomiej Pelc | Trener personalny`,
    description: `description check`,
    url:`https://piotrmiszczak.github.io/Website-for-personal-trainer`,
    image: `https://www.google.com/url?sa=i&url=https%3A%2F%2Feconomictimes.indiatimes.com%2Fmagazines%2Fpanache%2Ftime-to-get-in-shape-here-are-six-easy-workout-routines-and-exercises-that-you-can-follow-while-in-quarantine%2Farticleshow%2F74746918.cms&psig=AOvVaw225NMCX96qoDgpUg_stRjx&ust=1621027767493000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiyxpvNx_ACFQAAAAAdAAAAABAD`,
  },
  pathPrefix: "/Website-for-personal-trainer",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "PELCU",
        fieldName: "pelcu",
        url: "https://api-eu-central-1.graphcms.com/v2/ckoaivfcmv3cf01yz93io9h7u/master",
      }},
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          icon: `src/images/logo.png`,
        },
      },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
