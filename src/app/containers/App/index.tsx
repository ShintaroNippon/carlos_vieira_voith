import React, { Component } from 'react';
import { connect } from 'react-redux';
import VoithGetWeather from '../../services/githubweather';

import { Header } from 'app/components';
import { ResultData } from 'app/components';

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

  getWeather = async () => {
    const data = await VoithGetWeather.getVoithGetWeather();
    await this.setState({ weather: data });
  };

  render() {
    console.log(this.getWeather(), '.çççç');
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <Header />
            <ResultData data={this.state.weather} />
          </div>
        </div>
      </div>
    );
  }
}

export const App = connect(null, mapDispatchToProps)(AppContainers);
