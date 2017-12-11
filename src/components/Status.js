import React, { Component } from 'react';

class Status extends Component {
  constructor() {
    super();

    this.state = {
      online: null,
      is_open: null,
      open_hours_today: null,
    };
  }

  componentDidMount() {
    let url = 'https://app.akira.md/api/system_status';
    
    fetch(url)
    .then(response => {
      response.json().then(data => {
        this.setState({
          online: data.online,
          is_open: data.is_open_for_business,
          open_hours_today: data.open_hours_today,
        });
      });
    });
  }

  render() {
    return null;
  }
}

export default Status;