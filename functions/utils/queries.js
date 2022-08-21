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
  query {
    metaByHeroId(heroId: "${id}"){
      data {
        name
        colorLogoPath
      }
    }
    profileByHeroId(heroId: "${id}"){
      data {
        intro {
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
