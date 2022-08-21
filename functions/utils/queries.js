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

const GET_PROFILE = (id) => `
  query findProfile {
    profileByHeroId(heroId: "${id}"){
      data {
        intro {
          name
          alias
          description
          imagePath
        }
        appearance {
          race
          height
          weight
          eyeColor
          hairColor
          imagePath
        }
        powers
        detail {
          fullName
          birthPlace
          occupation
          base
          firstAppearance
          imagePath
        }
        skills {
          name
          namePosX
          value
        }
      }
    }
  }
`;

module.exports = {
  GET_METAS,
  GET_PROFILE,
};
