import { SEARCH_GIFS, FETCH_GIFS, DELETE_GIFS, SORT_GIFS } from '../Actions/index';

export default function (state = [], action) {
  switch(action.type) {
  case FETCH_GIFS:
    return action.payload.data.data;
  case SEARCH_GIFS:
    return action.payload.data.data;
  case DELETE_GIFS:
    return state.trending = [];
  case SORT_GIFS:
    return state.slice(0).sort((a, b) => {
      return a.title.toLowerCase() > b.title.toLowerCase();
    })
  default:
    return state;
  }


}
