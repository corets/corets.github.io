require('dotenv').config()
const get = require('lodash/get')

const query = `
{
  allMdx {
    edges {
      node {
        excerpt(pruneLength: 50000)
        fileAbsolutePath
      }
    }
  }
  allDoczEntries {
    edges {
      node {
        route
        name
        fullpath
      }
    }
  }
}
`

// List of attributes to snippet, with an optional maximum number of words to snippet.
const settings = { attributesToSnippet: [`excerpt:20`] }
const queries = [
  {
    query: query,
    transformer: gqlResponse => {
      const allMdx = get(gqlResponse, 'data.allMdx.edges', []).map(
        ({ node }) => node
      ).reduce((acc, node) => {
        acc[node.fileAbsolutePath] = node
        return acc
      }, {})
      const allDoczEntries = get(
        gqlResponse,
        'data.allDoczEntries.edges',
        []
      ).map(({ node }) => node).reduce((acc, node) => {
        acc[node.fullpath] = node

        return acc
      }, {})

      const records = Object.keys(allMdx).map(path => {
        const doc = allDoczEntries[path]
        const mdx = allMdx[path]

        if (doc) {
          return { ...doc, ...mdx }
        }

        return null
      }).filter(i => i !== null)

      return records
    },
    settings,
  },
]

module.exports = {
  plugins: [
    'gatsby-theme-docz',
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
  ],
  // todo: remove later
  flags: {
    DEV_SSR: false
  }
}
