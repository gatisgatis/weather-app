import React, {FC} from 'react';
import styles from './image.module.css';

type Props = {
  img: string;
};

const Image: FC<Props> = ({img}) => {
  return (
    <div className={styles.wrapper}>
      <img src={img} alt="City" className={styles.image} />
    </div>
  );
};

export default Image;
