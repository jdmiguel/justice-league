module.exports = (pathName) => {
  const heroIdIndex = pathName.lastIndexOf('/') + 1;
  return pathName.slice(heroIdIndex, pathName.length);
};
