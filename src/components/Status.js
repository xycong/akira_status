import React, { Component } from 'react';
import { dataIsLoading, dataFetchSuccess, dataHasErrored } from '../actions/data';
import { connect } from 'react-redux';
import { fetchData } from '../actions/items';
class Status extends Component {
  constructor() {
    super();

    this.state = {
      online: null,
      is_open: null,
      open_hours_today: null,
      isLoading: false,
      hasErrored: false,
    };
  }

  componentDidMount() {
    this.fetchData('https://app.akira.md/api/system_status');
  }

  render() {
    if (this.state.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.state.isLoading) {
      return <p>Loading…</p>;
    }

    return null;
  }
}

export default Status;