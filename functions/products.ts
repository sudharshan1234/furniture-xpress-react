let dotenv = require("dotenv");
dotenv.config();
let Airtable = require("airtable-node");

let airtable = new Airtable({
  apiKey: process.env.VITE_AIRTABLE_API_KEY,
})
  .base(process.env.VITE_AIRTABLE_BASE)
  .table(process.env.VITE_AIRTABLE_TABLE);

exports.handler = async (event: any, context: any, cb) => {
  try {
    const response = await airtable.list({ maxRecords: 200 });
    // console.log(response);
    const products = response.records.map((product) => {
      const { id, fields } = product;

      const {
        name,
        featured,
        price,
        colors,
        company,
        description,
        category,
        shipping,
        images,
      } = fields;
      const { url } = images[0];
      return {
        id,
        name,
        featured,
        price,
        colors,
        company,
        description,
        category,
        shipping,
        image: url,
      };
    });

    // console.log(products);

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.log(error);

    return {
      statusCode: 500,
      body: "There was an error",
    };
  }
};
