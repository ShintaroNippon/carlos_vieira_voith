import React, { Component } from 'react';
import { connect } from 'react-redux';
//import VoithGetWeather from '../../services/githubweather';

import { Header } from 'app/components';
import { addVoithWeather } from '../../redux/actions/index';

function mapDispatchToProps(dispatch) {
  return {
    addVoithWeather: (values) => dispatch(addVoithWeather(values))
  };
}

interface State {
  weather: any;
}

export class AppContainers extends Component<any, State> {
  constructor(props) {
    super(props);
    this.state = {
      weather: ''
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <Header />
          </div>
        </div>
      </div>
    );
  }
}

export const App = connect(null, mapDispatchToProps)(AppContainers);
