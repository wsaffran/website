const express = require('express')
const graphqlHttp = require('express-graphql')

const app = express()

app.use('/graphql', graphqlHttp({
  schema: null,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('now listening on port 4000')
})
