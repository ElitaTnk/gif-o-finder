import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { searchGif } from '../Actions/index';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: ''
    };

  }

  inputOnChange = (term) => {
    const videoSearch = _.debounce((term) => { this.props.searchGif(term) }, 500);

    this.setState({
      selection: term
    });

    videoSearch(term);
  }

  render() {
    return (
      <div className="searchBar__container col-md-8">
        <input className="searchBar__input"
        value={this.state.selection}
        placeholder="Search something cool"
        onChange={event => this.inputOnChange(event.target.value)}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchGif }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
