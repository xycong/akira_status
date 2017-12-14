import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Only need to import one action creator, handles dispatching all other actions
import { statusFetchData } from '../actions/status';
import { Card, Icon, Loader, Transition } from 'semantic-ui-react'
import Clock from 'react-live-clock';
let moment = require('moment');

class Status extends Component {
  componentDidMount() {
    this.props.fetchData('https://app.akira.md/api/system_status');
  }

  render() {

    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the system status.</p>;
    }

    if (this.props.isLoading) {
      return (
        <Loader active size='large' inline='centered'>Loading</Loader>
      );
    }

    if (!this.props.status) {
      return null;
    }

    console.log("render", this.props.status);
    let openHours = this.props.status.open_hours_today;
    let startTime = moment(openHours.open_at).format('h:mma');
    let endTime = moment(openHours.close_at).format('h:mma');
    let systemTime = moment(this.props.status.system_time).format('h:mm:ss a');

    return (
      <Transition animation='fade up' duration='500' visible>
        <Card centered>
          <Card.Content header={this.props.status.is_open_for_business ? "We're open!" : "Sorry! We're closed at the moment..."} />
          <Card.Content>
            <h1><Clock format={'h:mm:ss a'} ticking={true} timezone={'US/Eastern'} /></h1>
            <p>Last updated: {systemTime}</p>
          </Card.Content>
          <Card.Content extra>
            <Icon name='clock' />
            Today's Hours: {startTime} to {endTime}
          </Card.Content>
        </Card>
      </Transition>
    );
    // return null;
  }
}

Status.propTypes = {
  fetchData: PropTypes.func.isRequired,
  // status: PropTypes.oneOf([PropTypes.array, PropTypes.object]),
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