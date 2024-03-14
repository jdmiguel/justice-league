const { GET_PROFILE } = require('./utils/queries');
const sendQuery = require('./utils/sendQuery');
const getHeroIdFromPathName = require('./utils/getHeroIdFromPathName');
const parseStringifiedObjects = require('./utils/parseStringifiedObjects');
const formatResponse = require('./utils/formatResponse');

exports.handler = async ({ path }) => {
  const heroId = getHeroIdFromPathName(path);

  try {
    const res = await sendQuery(GET_PROFILE(heroId));
    const { intro, appearance, detail, skills, powers } = res.profileCollection.edges[0].hero;
    const [parsedIntro, parsedAppearance, parsedDetail] = parseStringifiedObjects([
      intro,
      appearance,
      detail,
    ]);
    const parsedSkills = parseStringifiedObjects(skills);
    const data = {
      ...res.metaCollection.edges[0].hero,
      intro: parsedIntro,
      appearance: parsedAppearance,
      detail: parsedDetail,
      skills: parsedSkills,
      powers,
    };
    return formatResponse(200, data);
  } catch (err) {
    console.error(err);
    return formatResponse(500, { err: 'Something went wrong' });
  }
};
