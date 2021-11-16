class VoithGetWeather {
  async getVoithGetWeather() {
    // GET CITY CODE with:
    /* get city code with "Reference": "/locations/v1/cities/countryCode/search?apikey=AqdQoGW7ICWkluCAV3N9sjGKJqjNBmNs&q=Heidenheim" */
    const url =
      'https://dataservice.accuweather.com/forecasts/v1/daily/1day/172768.json?language=en&apikey=AqdQoGW7ICWkluCAV3N9sjGKJqjNBmNs';

    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}

export default new VoithGetWeather();
