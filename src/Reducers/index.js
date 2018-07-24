import { combineReducers } from 'redux';
import VideosReducer from './reducer_videos';
import ActiveVideo from './reducer_active_video';

const rootReducer = combineReducers({
  trending: VideosReducer,
  activeVideo: ActiveVideo,
});

export default rootReducer;
