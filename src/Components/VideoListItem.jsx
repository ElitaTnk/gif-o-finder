import React from 'react';

const VideoListItem = ({gif, onVideoSelect, active}) => {
  const videoUrl = gif.images.downsized_small.mp4;
  let isActive;

  if (active) {
    isActive = (gif.id === active.id) ? 'active' : 'inactive';
  }

  return (
    <li
      onClick={()=> onVideoSelect(gif.id)}
      className={`list-group-item video-list__item ${isActive}`}>
      <div className="video-list__item__media media">
        <div className="video-list__item__media--left">
          <video className="media-object" src={videoUrl} />
        </div>
        <div className="video-list__item__media--body">
          <h4 className="video-list__item__heading">{gif.title}</h4>
          { gif.username && <p>{`by: ${gif.username}`}</p>}
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
