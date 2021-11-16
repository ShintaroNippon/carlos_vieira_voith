import fetch from 'isomorphic-unfetch';

class VoithGetWeather {
  getVoithGetWeather() {
    return fetch(
      'https://dataservice.accuweather.com/forecasts/v1/daily/1day/172768.json?language=en&apikey=8OBuG50fzE0ZR9oOqlJQoiC2Ph1Zktiv',
      {
        method: 'GET',
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate',
          'accept-language': 'pt-PT, pt;q=0.9, en-US;q=0.8, en;q=0.7',
          'access-control-allow-headers': 'origin, x-requested-with, accept',
          'access-control-allow-methods': 'GET',
          'access-control-allow-origin': '*'
        }
      }
    )
      .then((resp) => {
        return resp.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new VoithGetWeather();
