const { GET_EVENTS } = require('./utils/queries');
const sendQuery = require('./utils/sendQuery');
const getHeroIdFromPathName = require('./utils/getHeroIdFromPathName');
const parseStringifiedObjects = require('./utils/parseStringifiedObjects');
const formatResponse = require('./utils/formatResponse');

exports.handler = async ({ path }) => {
  const heroId = getHeroIdFromPathName(path);

  try {
    const res = await sendQuery(GET_EVENTS(heroId));
    const parsedEventsResponse = parseStringifiedObjects(res.eventsCollection.edges[0].hero.events);
    const data = {
      colorLogoPath: res.metaCollection.edges[0].hero.colorLogoPath,
      events: parsedEventsResponse,
    };
    return formatResponse(200, data);
  } catch (err) {
    console.error(err);
    return formatResponse(500, { err: 'Something went wrong' });
  }
};
