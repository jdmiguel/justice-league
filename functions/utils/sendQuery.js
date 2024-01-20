const axios = require('axios');
require('dotenv').config();

module.exports = async (query, variables) => {
  const {
    data: { data, errors },
  } = await axios({
    url: 'https://uyvrezmrknaqosbfuqzd.supabase.co/graphql/v1',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      apiKey: process.env.SUPABASE_API_KEY,
    },
    data: {
      query,
      variables,
    },
  });

  if (errors) {
    console.error(errors);
    throw new Error('Something went wrong');
  }

  return data;
};
