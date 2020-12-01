/* eslint-disable import/no-cycle */
import React from 'react';
import WorldMap from '../components/world-map/world-map';
import BackgroundImage from '../components/background-image/background-image';
import List from '../components/list/list';
import {H1} from '../components/typography/typography';

export type CityInfo = {
  name: string;
  posX: number;
  posY: number;
  img: string;
};

export const CITIES: CityInfo[] = [
  {
    name: 'Riga',
    posX: 54,
    posY: 19,
    img:
      'https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2015/09/riga-latvia-cityscape-in-sunny-summer-day-famous-PY9RNEW-1.jpg',
  },
  {
    name: 'Delhi',
    posX: 68,
    posY: 35,
    img: 'https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg',
  },
  {
    name: 'Tokyo',
    posX: 83,
    posY: 26,
    img:
      'https://i0.wp.com/www.director.co.uk/wp-content/uploads/Tokyo-city-landscape.jpg?fit=1000%2C500&ssl=1',
  },
  {
    name: 'NewYork',
    posX: 30,
    posY: 27,
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
  },
  {
    name: 'Moscow',
    posX: 62,
    posY: 17,
    img:
      'https://amp.thenationalnews.com/image/policy:1.186093:1499305668/image/jpeg.jpg?f=16x9&w=1200&$p$f$w=dfa40e8',
  },
  {
    name: 'Sidney',
    posX: 88,
    posY: 72,
    img:
      'https://cdn.pixabay.com/photo/2019/06/03/19/47/australia-4249691_960_720.jpg',
  },
  {
    name: 'London',
    posX: 48,
    posY: 20,
    img:
      'https://www.cityam.com/wp-content/uploads/2020/02/London_Tower_Bridge_City.jpg',
  },
  {
    name: 'Cairo',
    posX: 60,
    posY: 45,
    img:
      'https://www.tripsavvy.com/thmb/_2DZHj0eLqgKFVYsLZRGXnpcsbo=/2120x1414/filters:fill(auto,1)/high-angle-view-of-cairo-during-daytime--egypt-940395494-5c572f4246e0fb00013a2bb8.jpg',
  },
  {
    name: 'Mexico',
    posX: 20,
    posY: 40,
    img:
      'https://www.hotelgods.com/wp-content/uploads/2020/07/Mexico-City-Travel-Guide.jpg',
  },
];

export const Home = () => {
  return (
    <section>
      <BackgroundImage />
      <div className="container padding-top--100">
        <H1 className='flex center-xs'>
          WEATHER EVERYWHERE!
        </H1>
        <div className="row">
          <div className="col-xs-8 center-xs">
            <WorldMap data={CITIES} />
          </div>
          <div className="col-xs-4 center-xs">
            <List data={CITIES} />
          </div>
        </div>
      </div>
    </section>
  );
};

// 54%
