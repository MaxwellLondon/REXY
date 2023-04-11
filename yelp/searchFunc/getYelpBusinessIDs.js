import axios from 'axios';

const getYelpBusinessIDs = async (query, location) => {
  const apiKey = 'API_KEY';
  const apiUrl = 'https://api.yelp.com/v3/businesses/search';

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      params: {
        term: query,
        location,
      },
    });

    const businessIDs = response.data.businesses.map((business) => business.id);
    return businessIDs;
  } catch (error) {
    console.error('Error fetching data from Yelp API:', error);
    return [];
  }
};
