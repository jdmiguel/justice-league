const { GET_PROFILE } = require('./utils/queries');
const sendQuery = require('./utils/sendQuery');
const getHeroIdFromPathName = require('./utils/getHeroIdFromPathName');
const parseResponse = require('./utils/parseResponse');
const formatResponse = require('./utils/formatResponse');

exports.handler = async ({ path }) => {
  const heroId = getHeroIdFromPathName(path);

  try {
    const res = await sendQuery(GET_PROFILE(heroId));
    const parsedProfileResponse = parseResponse(res.profileCollection.edges[0].hero);
    const data = { ...res.metaCollection.edges[0].hero, ...parsedProfileResponse };
    return formatResponse(200, data);
  } catch (err) {
    console.error(err);
    return formatResponse(500, { err: 'Something went wrong' });
  }
};
