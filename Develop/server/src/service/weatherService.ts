import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
 
// TODO: Define a class for the Weather object

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties

  // TODO: Create fetchLocationData method
  // private async fetchLocationData(query: string) {}

  // TODO: Create destructureLocationData method
  // private destructureLocationData(locationData: Coordinates): Coordinates {}

  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {
    const geocodeQuery = `http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=1&appid=${process.env.API_KEY}`;
    return geocodeQuery
  }

  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}

  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}

  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}

  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}

  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}

  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {
    const geocodeQuery = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.API_KEY}`;

    const geoResult = await this.buildGeocodeQuery();

    const geoCodeResponse = await fetch(geocodeQuery);
    const geoCodeData = await geoCodeResponse.json();

    const coordinates = {
      latitude: geoCodeData[0].lat,
      longitude: geoCodeData[0].lon,
    }

    const currentWeatherQuery = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${process.env.API_KEY}&units=imperial`

    const currentWeatherResponse = await fetch(currentWeatherQuery);
    const currentWeatherData = await currentWeatherResponse.json();

    console.log(currentWeatherData)


    const parsedCurentWeather = {
      // city, date, icon, iconDescription, tempF, windSpeed, humidity
      city: currentWeatherData.name,
      date: new Date(currentWeatherData.dt * 1000).toLocaleDateString(),
      icon: currentWeatherData.weather[0].icon,
      iconDescription: currentWeatherData.weather[0].description,
      tempF: currentWeatherData.main.temp,
      windSpeed: currentWeatherData.wind.speed,
      humidity: currentWeatherData.main.humidity
    }


    const weatherArray = [
      parsedCurentWeather
    ]


    return weatherArray
  }
}

export default new WeatherService();
