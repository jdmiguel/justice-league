const axios = require('axios');
require('dotenv').config();

exports.handler = async function (event) {
  const GET_HERO_IDS = `
    query {
      allMetas {
        data {
          heroId
        }
      }
    }
  `;

  const { data } = await axios({
    url: 'https://graphql.eu.fauna.com/graphql',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
    },
    data: {
      query: GET_HERO_IDS,
      variables: {},
    },
  });

  console.log({ data });

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
