import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import moment from 'moment';
import {TiWeatherCloudy} from 'react-icons/ti';
import {FaWind} from 'react-icons/fa';
import {WiHumidity, WiDegrees} from 'react-icons/wi';
import {CgCompressV} from 'react-icons/cg';
import {useParams} from 'react-router-dom';
import Loading from '../components/loading/loading';
import BackgroundImage from '../components/background-image/background-image';
import {H2, H3} from '../components/typography/typography';
import Image from '../components/image/image';
import Tile from '../components/tile/tile';
import {CITIES, CityInfo} from './home';

axios.defaults.params = {appid: 'e4d483070559ead285fb37bf4d2e645f'};
const WEATHER_API_BASE = 'https://api.openweathermap.org/data/2.5/weather?';
const FORECAST_API_BASE = 'https://api.openweathermap.org/data/2.5/forecast?';

const stringifyApiObject = (params: Object, base: string) => {
  return Object.entries(params).reduce((output, current) => {
    return `${output}${current[0]}=${current[1]}&`;
  }, base);
};

const selectBGimage = (selector: string) => {
  switch (selector) {
    case 'Rain':
      return 'https://www.sunspotrealty.com/wp-content/uploads/2020/02/4-rainy-day-1.jpg';
    case 'Snow':
      return 'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555927976/shape/mentalfloss/111798556-565x376_1.jpg?itok=UEG-2KGY';
    case 'Smoke':
      return 'https://pcdn.columbian.com/wp-content/uploads/2020/09/Foggy-weather-1226x0-c-default.jpg';
    case 'Sunny':
      return 'https://cdn.wallpapersafari.com/0/50/XeuM0N.jpg';
    case 'Clouds':
      return 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Cloudy_Sky_%2841158984%29.jpeg';
    case 'Clear':
      return 'https://www.aldergrovestar.com/wp-content/uploads/2020/03/20890720_web1_Langley-Weather-Sun-Clear-Sky-Skies.jpg';
    case 'Haze':
      return 'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/r9E0QYuleiv25jmq9/6-in-1-video-the-slow-moving-stream-of-cars-on-the-road-during-heavy-fog-foggy-weather-real-time-capture_huefcmcxe_thumbnail-1080_01.png';
    default:
      return 'https://iso.500px.com/wp-content/uploads/2014/06/W4A2827-1.jpg';
  }
};

export const City = () => {
  const {name} = useParams<{name: string}>();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(Object);
  const [forecastData, setForecastData] = useState(Object);
  const [fail, setFail] = useState('');

  useEffect(() => {
    axios
      .get(stringifyApiObject({q: name, units: 'metric'}, WEATHER_API_BASE))
      .then((response) => setData(response.data))
      .catch(() =>
        setFail(
          `Something wrong with data request for ${name}. Click Home and try again or choose another city.`
        )
      );
  }, []);

  useEffect(() => {
    axios
      .get(stringifyApiObject({q: name, units: 'metric'}, FORECAST_API_BASE))
      .then((response2) => setForecastData(response2.data))
      .catch(() =>
        setFail(
          `Something wrong with data request for ${name}. Click Home and try again or choose another city.`
        )
      )
      .finally(() => setLoading(false));
  }, []);

  const findCityImage = (arr: CityInfo[]) => {
    let image = '';
    arr.some((city) => {
      if (city.name === name) {
        image = city.img;
        return true;
      }
      return false;
    });
    return image;
  };

  const selectFirstForecast = (arr: Object[]): number => {
    let answer = 0;
    arr.some((item, index) => {
      // @ts-ignore
      const hour = moment.unix(item.dt).format('h A');
      if (hour === '2 AM') {
        answer = index;
        return true;
      }
      return false;
    });
    return answer;
  };

  if (loading) return <Loading />;

  if (fail) return <div>{fail}</div>;

  const firstIndex = selectFirstForecast(forecastData.list);

  return (
    <section>
      <BackgroundImage imgUrl={selectBGimage(data.weather[0].main)} />
      <div className="container padding-top--100 flex center-xs">
        <div className="city__wrapper">
          <div className="city__overlay" />
          <div className="row pos-rel z-1">
            <div className="col-xs-12 col-md-6 start-md center-xs">
              <H2>
                <div>
                  {data.name}, {data.sys.country}
                </div>
                <Moment format="MMM Do hh:mm" />
                <div>
                  {data.main.temp.toFixed(1)}
                  <WiDegrees />C{' '}
                </div>
                <div>{data.weather[0].description}</div>
              </H2>
              <H3>
                <div>
                  <FaWind /> {data.wind.speed} m/s
                </div>
                <div>
                  <TiWeatherCloudy /> {data.clouds.all}%
                </div>
                <div>
                  <WiHumidity /> {data.main.humidity}%
                </div>
                <div>
                  <CgCompressV /> {(data.main.pressure * 0.000987).toFixed(1)} atm{' '}
                </div>
              </H3>
            </div>
            <div className="col-xs-12 col-md-6 center-xs">
              <Image img={findCityImage(CITIES)} />
            </div>
          </div>
          <div className="row pos-rel z-1">
            <H3 className="col-xs-12">Next Days</H3>
            <div className="col-md-3 col-xs-6 center-xs">
              <Tile night={forecastData.list[firstIndex]} day={forecastData.list[firstIndex + 4]} />
            </div>
            <div className="col-md-3 col-xs-6 center-xs">
              <Tile
                night={forecastData.list[firstIndex + 8]}
                day={forecastData.list[firstIndex + 12]}
              />
            </div>
            <div className="col-md-3 col-xs-6 center-xs">
              <Tile
                night={forecastData.list[firstIndex + 16]}
                day={forecastData.list[firstIndex + 20]}
              />
            </div>
            <div className="col-md-3 col-xs-6 center-xs">
              <Tile
                night={forecastData.list[firstIndex + 24]}
                day={forecastData.list[firstIndex + 28]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
