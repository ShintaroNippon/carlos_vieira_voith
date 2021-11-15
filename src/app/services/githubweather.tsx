import fetch from 'isomorphic-unfetch';

class VoithGetWeather {
  getVoithGetWeather() {
    return fetch('https://openweathermap.org/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => {
        return resp.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new VoithGetWeather();
