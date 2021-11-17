import React, { useState, useEffect } from 'react';
import VoithGetWeather from '../../services/githubweather';

import { Header } from 'app/components';
import { ResultData } from 'app/components';

export const App = () => {
  const [dataWeather, dataSet] = useState<any>(null);

  useEffect(() => {
    (async function () {
      try {
        const response = await VoithGetWeather.getVoithGetWeather();
        dataSet(response);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-8 offset-md-2">
          <Header />
          <ResultData data={dataWeather} />
          <ResultData data={dataWeather} />
        </div>
      </div>
    </div>
  );
};
