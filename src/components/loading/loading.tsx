import React, {FC} from 'react';
import {VscLoading} from 'react-icons/vsc';
import './loading.css';

const Loading: FC = () => {
  return (
    <div className="loading">
      <VscLoading className="loading__big-icon" />
      <div className="loading__title">Laoding...</div>
    </div>
  );
};

export default Loading;
