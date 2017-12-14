import React, { Component } from 'react';

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

  fetchData(url) {
    this.setState({ isLoading: true });

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        this.setState({ isLoading: false });

        return response;
      })
      .then(response => response.json())
      .then(data => this.setState({
        online: data.online,
        is_open: data.is_open_for_business,
        open_hours_today: data.open_hours_today,
      }))
      .catch(() => this.setState({ hasErrored: true }));
  }

  render() {
    return null;
  }
}

export default Status;