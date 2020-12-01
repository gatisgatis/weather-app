import React, {FC} from 'react';
import './background-image.css';

type Props = {
  imgUrl?: string;
};

const DEFAULT_BG_IMAGE =
  'https://i.pinimg.com/originals/b9/04/89/b90489ba101563d221994aaf9add8f35.jpg';

const BackgroundImage: FC<Props> = ({imgUrl = DEFAULT_BG_IMAGE}) => {
  return <div className="background-image-component" style={{backgroundImage: `url(${imgUrl})`}} />;
};

export default BackgroundImage;
