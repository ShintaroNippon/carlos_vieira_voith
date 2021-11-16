class VoithGetWeather {
  private apiKey = 'XJeFoInk1CtgF76Q4fb5aBGp5CR9yKGT';
  private city = 'Heidenheim';

  async getVoithGetWeather() {
    console.log('test');
    const cityKey = await this.getCityId();
    const url =
      'https://dataservice.accuweather.com/forecasts/v1/daily/1day/' +
      cityKey +
      '.json?language=en&apikey=' +
      this.apiKey;

    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getCityId() {
    // GET CITY CODE with:
    console.log('aqui')
    /* get city code with "Reference": "/locations/v1/cities/countryCode/search?apikey=AqdQoGW7ICWkluCAV3N9sjGKJqjNBmNs&q=Heidenheim" */
    const url =
      'https://dataservice.accuweather.com/locations/v1/cities/search?apikey=' + this.apiKey + '&q=' + this.city;

    const response = await fetch(url);
    const cityKey = await response.json();
    console.log(cityKey[0].Key,'.....');
    if (cityKey.length) {
      return cityKey[0].Key;
    }

    return '172768';
  }
}

export default new VoithGetWeather();
