import React, {FC} from 'react';
import './typography.css';

type Props = {
  className?: string;
};

export const H1: FC<Props> = ({children, className=''}) => {
  return <h1 className={`heading1 ${className}`}>{children}</h1>;
};

export const H2: FC<Props> = ({children, className}) => {
  return <h2 className={`heading2 ${className}`}>{children}</h2>;
};

export const H3: FC<Props> = ({children, className}) => {
  return <h3 className={`heading3 ${className}`}>{children}</h3>;
};

export const Text: FC<Props> = ({children, className}) => {
  return <span className={`text ${className}`}>{children}</span>;
};
