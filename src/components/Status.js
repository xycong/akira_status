import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Only need to import one action creator, handles dispatching all other actions
import { statusFetchData } from '../actions/status';
class Status extends Component {
  componentDidMount() {
    this.props.fetchData('https://app.akira.md/api/system_status');
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return null;
  }
}

Status.propTypes = {
  fetchData: PropTypes.func.isRequired,
  staus: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    status: state.status,
    hasErrored: state.statusHasErrored,
    isLoading: state.statusIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(statusFetchData(url))
  };
};

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Status);