const axios = require('axios');
require('dotenv').config();
const { GET_EVENTS } = require('./utils/queries');
const sendQuery = require('./utils/sendQuery');
const getHeroIdFromPathName = require('./utils/getHeroIdFromPathName');
const formatResponse = require('./utils/formatResponse');

exports.handler = async ({ path }) => {
  const heroId = getHeroIdFromPathName(path);

  try {
    const res = await sendQuery(GET_EVENTS(heroId));
    const data = {
      colorLogoPath: res.metaCollection.edges[0].hero.colorLogoPath,
      events: res.eventsCollection.edges[0].hero.events,
    };
    return formatResponse(200, data);
  } catch (err) {
    console.error(err);
    return formatResponse(500, { err: 'Something went wrong' });
  }
};
