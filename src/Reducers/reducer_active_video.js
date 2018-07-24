import { FETCH_GIF } from '../Actions/index';

export default function (state = [], action) {
  switch(action.type) {
    case FETCH_GIF:
      return action.payload.data;
    default:
      return state;
    }

}
