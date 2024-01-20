module.exports = (data) =>
  Object.entries(data).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: typeof value === 'string' ? JSON.parse(value) : value,
    }),
    {},
  );
