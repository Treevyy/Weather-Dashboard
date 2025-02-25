import { Router, type Request, type Response } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';


/// All of these routes are prefixed with /api/weather
// TODO: POST Request with city name to retrieve weather data
router.post('/', async (req: Request, res: Response) => {
  // TODO: GET weather data from city name
  // TODO: save city to search history
  console.log("The request have arrived in the server!")

  const city = req.body.cityName
  console.log("City name: ", city);

  const weatherArray = await WeatherService.getWeatherForCity(city)

  // return an array
  res.json(weatherArray)
});

// TODO: GET search history
// this route is 'api/weather/history'
router.get('/history', async (req: Request, res: Response) => {
  const historyData = await HistoryService.getCities();

  res.json(historyData);
});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {});

export default router;
