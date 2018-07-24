import axios from 'axios';

export const FETCH_GIF = 'FETCH_GIF';
export const FETCH_GIFS = 'FETCH_GIFS';
export const SEARCH_GIFS = 'SEARCH_GIFS';
export const DELETE_GIFS = 'DELETE_GIFS';
export const SORT_GIFS = 'SORT_GIFS';

const ROOT_URL = 'http://api.giphy.com/v1/gifs';
const API_KEY = '?api_key=akWdyRB3SnmEGWYUNzSlZcSuCrzABEsk';

export function selectVideo(video) {
  return {
    type: 'SELECTED_VIDEO',
    payload: video
  }
}

  export function fetchGif(id) {
  const request = axios.get(`${ROOT_URL}/${id}${API_KEY}`);

  return {
    type: FETCH_GIF,
    payload: request
  }
}

export function fetchGifs() {
  const request = axios.get(`${ROOT_URL}/trending${API_KEY}&limit=5`);

  return {
    type: FETCH_GIFS,
    payload: request
  };
}

export function searchGif(query) {
  const request = axios.get(`${ROOT_URL}/search${API_KEY}&q=${query}&limit=5`);

  return {
    type: SEARCH_GIFS,
    payload: request
  };
}

export function deleteGifs(query) {
  return {
    type: DELETE_GIFS
  };
}

export function sortASC() {
  return {
    type: SORT_GIFS
  };
}
