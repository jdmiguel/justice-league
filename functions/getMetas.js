const axios = require('axios');
require('dotenv').config();
const { GET_METAS } = require('./utils/queries');
const sendQuery = require('./utils/sendQuery');
const formatResponse = require('./utils/formatResponse');

exports.handler = async (event) => {
  try {
    const res = await sendQuery(GET_METAS);
    const data = res.metaCollection.edges.map((edge) => edge.hero);
    return formatResponse(200, data);
  } catch (err) {
    console.error(err);
    return formatResponse(500, { err: 'Something went wrong' });
  }
};
