class VoithGetWeather {
  async getVoithGetWeather() {
    const url =
      'https://dataservice.accuweather.com/forecasts/v1/daily/1day/172768.json?language=en&apikey=AqdQoGW7ICWkluCAV3N9sjGKJqjNBmNs';

    const response = await fetch(url);
    const data = await response.json();
    return data.DailyForecasts[0];
  }
}

export default new VoithGetWeather();
