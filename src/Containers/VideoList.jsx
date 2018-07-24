import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchGif, fetchGifs, deleteGifs, sortASC } from '../Actions/index';
import { bindActionCreators } from 'redux';

import VideoListItem from '../Components/VideoListItem';

class VideoList extends Component {
  componentDidMount() {
    this.props.fetchGifs();
  }

  renderList() {
    return this.props.trending.map((gif, key) => {
      return (
        <VideoListItem
          gif={gif}
          key={key}
          active={this.props.activeVideo.data}
          onVideoSelect={this.props.fetchGif}
        />
      );
    });
  }
  renderButtons() {
    if (!this.props.trending || this.props.trending <= 0) {
      return <button className="btn btn-success video-list__btn" onClick={this.props.fetchGifs}>Fetch List</button>;
    } else {
      return <button className="btn btn-danger video-list__btn" onClick={this.props.deleteGifs}>Delete List</button>;
    }
  }

  render() {
    if (!this.props.trending ) {
      return <div> Loading...</div>;
    }

    return (
      <div className="video-list">
        <div className="video-list__btn-container">
          {this.renderButtons()}
          {this.props.trending.length > 0 && <button className="btn btn-default
          video-list__btn" onClick={this.props.sortASC}>Sort by Title</button>}
        </div>
        <ul className="col-md-4 list-group video-list__container">
          {this.renderList()}
        </ul>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    trending: state.trending,
    activeVideo: state.activeVideo,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGif, fetchGifs, deleteGifs, sortASC }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
