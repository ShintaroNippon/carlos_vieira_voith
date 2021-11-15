import { ADD_VOID_WEATHER } from '../constants/action-types';

export function addVoithWeather(payload: any) {
  return { type: ADD_VOID_WEATHER, payload };
}
