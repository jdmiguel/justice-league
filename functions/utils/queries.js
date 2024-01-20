const GET_METAS = `
  query {
    metaCollection {
      edges {
        hero:node {
          id
          heroId
          name
          menuBgImagePath
          whiteLogoPath
        }
      }
    }
  }
`;

const GET_PROFILE = (heroId) => `
  query {
    metaCollection(filter: {heroId: {eq: "${heroId}"}}) {
      edges {
        hero:node {
          name
          colorLogoPath
        }
      }
    }
    profileCollection(filter: {heroId: {eq: "${heroId}"}}) {
      edges {
        hero:node {
          intro
          detail
          appearance
          powers
          skills
        }
      }
    }
  }
`;

const GET_ENEMIES = (heroId) => `
  query {
    metaCollection(filter: {heroId: {eq: "${heroId}"}}) {
      edges {
        hero:node {
          name
          colorLogoPath
        }
      }
    }
    enemiesCollection(filter: {heroId: {eq: "${heroId}"}}) {
      edges {
        hero:node {
          enemies
        }
      }
    }
  }
`;

const GET_EVENTS = (heroId) => `
  query {
    metaCollection(filter: {heroId: {eq: "${heroId}"}}) {
      edges {
        hero:node {
          colorLogoPath
        }
      }
    }
    eventsCollection(filter: {heroId: {eq: "${heroId}"}}) {
      edges {
        hero:node {
          events
        }
      }
    }
  }
`;

module.exports = {
  GET_METAS,
  GET_PROFILE,
  GET_ENEMIES,
  GET_EVENTS,
};
