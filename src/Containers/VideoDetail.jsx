import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchGif } from '../Actions/index';

class VideoDetail extends Component {
  componentDidMount() {
    this.props.fetchGif('epVGITwvy07xC');
  }

  render(){
    const { data } = this.props.activeVideo;
    if(!data) {
      return <div>Loading ... </div>;
    }

    return (
      <div className="video-detail__container col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <video src={data.images.original.mp4} autoPlay loop/>
        </div>
        <div className="video-detail__details">
          { data.title && <h1>{data.title}</h1>}
          { data.username && <p>{`by: ${data.username}`}</p>}
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    activeVideo: state.activeVideo
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGif }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);
