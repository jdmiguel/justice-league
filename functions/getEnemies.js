const { GET_ENEMIES } = require('./utils/queries');
const sendQuery = require('./utils/sendQuery');
const getHeroIdFromPathName = require('./utils/getHeroIdFromPathName');
const parseStringifiedObjects = require('./utils/parseStringifiedObjects');
const formatResponse = require('./utils/formatResponse');

exports.handler = async ({ path }) => {
  const heroId = getHeroIdFromPathName(path);

  try {
    const res = await sendQuery(GET_ENEMIES(heroId));
    const parsedEnemiesResponse = parseStringifiedObjects(
      res.enemiesCollection.edges[0].hero.enemies,
    );
    const data = {
      colorLogoPath: res.metaCollection.edges[0].hero.colorLogoPath,
      enemies: parsedEnemiesResponse,
    };
    return formatResponse(200, data);
  } catch (err) {
    console.error(err);
    return formatResponse(500, { err: 'Something went wrong' });
  }
};
