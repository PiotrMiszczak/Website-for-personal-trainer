module.exports = {
  siteMetadata: {
    title: `Bartłomiej Pelc | Trener personalny`,
    description: `Treningi personalne na terenie Warszawy, prowadzenie on-line, konsultacje. Zdrowe i wysportowane ciało wcale nie jest takie trudne do
    osiągnięcia. Jeśli zmagasz się z nadwagą i złym samopoczuciem, rozpocznij współpracę z trenerem jeszcze dziś!`,
    image: `https://github.com/PiotrMiszczak/Website-for-personal-trainer/blob/main/src/images/OG.JPG?raw=true`,
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
          icon: `src/images/logo.svg`,
        },
      },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
