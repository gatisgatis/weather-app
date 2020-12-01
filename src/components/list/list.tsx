/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-cycle */
import React, {FC} from 'react';
import {useHistory} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import styles from './list.module.css';
import {CityInfo} from '../../pages/home';

type Props = {
  data: CityInfo[];
};

const List: FC<Props> = ({data}) => {
  const history = useHistory();
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.title}>Available Cities</div> */}
      {data.map((city) => {
        return (
          <div
            key={uuid()}
            className={styles.city}
            onClick={() => history.push(`/city/${city.name}`)}
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

export default List;
