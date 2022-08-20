const axios = require('axios');
require('dotenv').config();
const { GET_APPEARANCE } = require('./utils/queries');
const sendQuery = require('./utils/sendQuery');
const formatResponse = require('./utils/formatResponse');

exports.handler = async (event) => {
  const heroIdPathIndex = event.path.lastIndexOf('/') + 1;
  const heroId = event.path.slice(heroIdPathIndex, event.path.length);
  try {
    const res = await sendQuery(GET_APPEARANCE(heroId));
    const data = res.profileByHeroId.data[0].appearance;
    return formatResponse(200, data);
  } catch (err) {
    console.error(err);
    return formatResponse(500, { err: 'Something went wrong' });
  }
};
