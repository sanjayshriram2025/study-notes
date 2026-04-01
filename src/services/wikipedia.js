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

export const fetchImages = async (title) => {
  try {
    const response = await axios.get(
      'https://en.wikipedia.org/w/api.php',
      {
        params: {
          action: 'query',
          titles: title,
          prop: 'images',
          imlimit: '20',
          format: 'json',
          origin: '*'
        }
      }
    );
    const pages = response.data.query.pages;
    const page = Object.values(pages)[0];
    const imageNames = page.images
      ?.map(img => img.title)
      .filter(name => name.match(/\.(jpg|jpeg|png|gif)$/i))
      .slice(0, 10) || [];

    const imageUrls = await Promise.all(
      imageNames.map(async (name) => {
        try {
          const res = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
              action: 'query',
              titles: name,
              prop: 'imageinfo',
              iiprop: 'url',
              format: 'json',
              origin: '*'
            }
          });
          const pages = res.data.query.pages;
          const page = Object.values(pages)[0];
          return page.imageinfo?.[0]?.url || null;
        } catch {
          return null;
        }
      })
    );

    return imageUrls.filter(url => url !== null);
  } catch {
    return [];
  }
};