import React, {FC} from 'react';
import moment from 'moment';
import {WiDayRain, WiDaySnow, WiDayHaze, WiDaySunny, WiDegrees} from 'react-icons/wi';
import {TiWeatherCloudy, TiWeatherPartlySunny} from 'react-icons/ti';
import styles from './tile.module.css';

const chooseIcon = (selector: string) => {
  switch (selector) {
    case 'Rain':
      return <WiDayRain />;
    case 'Snow':
      return <WiDaySnow />;
    case 'Sunny':
      return <WiDaySunny />;
    case 'Clouds':
      return <TiWeatherCloudy />;
    case 'Haze':
      return <WiDayHaze />;
    default:
      return <TiWeatherPartlySunny />;
  }
};

type Props = {
  day: Object;
  night: Object;
};

const Tile: FC<Props> = ({day, night}) => {
  return (
    <div className={styles.wrapper}>
      {/* @ts-ignore */}
      <div className={styles.date}>{moment.unix(night.dt).format('MMM Do')}</div>
      <div className={styles.text}>
        {/* @ts-ignore  */}
        Night ({moment.unix(night.dt).format('h A')}) {chooseIcon(night.weather[0].main)} {night.main.temp}
        <WiDegrees />C{' '}
      </div>
      <div className={styles.text}>
        {/* @ts-ignore */}
        Day ({moment.unix(day.dt).format('h A')}) {chooseIcon(day.weather[0].main)} {day.main.temp}
        <WiDegrees />C{' '}
      </div>
    </div>
  );
};

export default Tile;
