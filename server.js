const express = require('express');
const expressGraphQL = require('express-graphql')
const schema = require('./schema.js')



const app = express();



app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql:true,
}))


app.listen(8000, () => {
    console.log("SERVER IS RUNNING ON PORT 8000")
});