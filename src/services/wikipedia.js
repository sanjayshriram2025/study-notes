import axios from 'axios';

export const searchWikipedia = async (query) => {
  const response = await axios.get(
    'https://en.wikipedia.org/w/api.php',
    {
      params: {
        action: 'query',
        list: 'search',
        srsearch: query,
        format: 'json',
        origin: '*'
      }
    }
  );
  return response.data.query.search[0]?.title || query;
};

export const fetchArticle = async (title) => {
  const response = await axios.get(
    'https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(title)
  );
  return response.data;
};