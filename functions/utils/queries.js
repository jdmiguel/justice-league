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

const GET_APPEARANCE = (id) => `
  query findAppearance {
    profileByHeroId(heroId: "${id}"){
      data {
        appearance {
          race
          height
          weight
          eyeColor
          hairColor
          imagePath
        }
      }
    }
  }
`;

const GET_POWERS = (id) => `
  query findPowers {
    profileByHeroId(heroId: "${id}"){
      data {
        powers
      }
    }
  }
`;

module.exports = {
  GET_METAS,
  GET_APPEARANCE,
  GET_POWERS,
};
