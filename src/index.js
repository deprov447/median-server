const express = require("express"),
  { graphqlHTTP } = require("express-graphql"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  dotenv = require("dotenv");

const schema = require("./schema/schema");

const app = express();
app.use(cors());
dotenv.config();

app.use(
  "/gql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`GQL server on ${port}`);
});
