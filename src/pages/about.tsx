import React from 'react';
import BackgroundImage from '../components/background-image/background-image';
import {H2, H3} from '../components/typography/typography';

export const About = () => {
  return (
    <section>
      <BackgroundImage />
      <div className="container padding-top--100 pos-rel z-1">
        <div className="row">
          <div className="col-xs-12 center-xs">
            <H2>It's about weather!</H2>
          </div>
        </div>
      </div>
    </section>
  );
};
