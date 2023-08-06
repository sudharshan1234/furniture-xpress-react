let dotenv = require("dotenv");
dotenv.config();
let Airtable = require("airtable-node");

let airtable = new Airtable({
  apiKey: process.env.VITE_AIRTABLE_API_KEY,
})
  .base(process.env.VITE_AIRTABLE_BASE)
  .table(process.env.VITE_AIRTABLE_TABLE);

exports.handler = async (event: any, context: any, cb) => {
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      let product = await airtable.retrieve(id);
      if (product.error) {
        return {
          statusCode: 404,
          body: `No product with id ${id}`,
        };
      }
      product = { id: product.id, ...product.fields };
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Server Error",
      };
    }
  }
  return {
    statusCode: 400,
    body: "please provide product id",
  };
};
