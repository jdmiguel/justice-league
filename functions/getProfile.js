const axios = require('axios');
require('dotenv').config();
const { GET_PROFILE } = require('./utils/queries');
const sendQuery = require('./utils/sendQuery');
const formatResponse = require('./utils/formatResponse');

exports.handler = async (event) => {
  const { path: pagePath } = event;
  const heroIdIndexInPagePath = pagePath.lastIndexOf('/') + 1;
  const heroIdFromPagePath = pagePath.slice(heroIdIndexInPagePath, pagePath.length);
  try {
    const res = await sendQuery(GET_PROFILE(heroIdFromPagePath));
    const data = { ...res.metaByHeroId.data[0], ...res.profileByHeroId.data[0] };
    return formatResponse(200, data);
  } catch (err) {
    console.error(err);
    return formatResponse(500, { err: 'Something went wrong' });
  }
};
