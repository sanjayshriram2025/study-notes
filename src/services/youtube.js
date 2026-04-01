import axios from 'axios';

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const fetchYouTubeVideos = async (query) => {
  try {
    const response = await axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
        params: {
          part: 'snippet',
          q: query + ' explained',
          type: 'video',
          maxResults: 5,
          key: YOUTUBE_API_KEY
        }
      }
    );
    return response.data.items;
  } catch (err) {
    return [];
  }
};