/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {FC} from 'react';
import {useHistory} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import styles from './world-map.module.css';
import {CityInfo} from '../../pages/home';

type Props = {
  data: CityInfo[];
};

const WorldMap: FC<Props> = ({data}) => {
  const history = useHistory();
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.map}
        src="https://www.klettmaps.com/images/interactive-perthes-wall-map-1.jpg"
        alt="map"
      />
      {data.map((city) => {
        return (
          <div
            key={uuid()}
            className={styles.city}
            onClick={() => history.push(`/city/${city.name}`)}
            style={{left: `${city.posX}%`, top: `${city.posY}%`}}
          >
            {city.name}
            <div className={styles.imgWrapper}>
              <img src={city.img} alt={city.name} className={styles.img} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorldMap;
