require('dotenv').config();

module.exports = async (query, variables) => {
  try {
    const response = await fetch('https://uyvrezmrknaqosbfuqzd.supabase.co/graphql/v1', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apiKey: process.env.SUPABASE_API_KEY,
      },
      body: JSON.stringify({ query, variables }),
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Something went wrong');
  }
};
