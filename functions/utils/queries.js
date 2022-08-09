const GET_METAS = `
  query {
    allMetas {
      data {
        heroId
        name
        menuBgImagePath
        whiteLogoPath
      }
    }
  }
`;

module.exports = {
  GET_METAS,
};
