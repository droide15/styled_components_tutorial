import React from 'react';
import './App.css';
import img1 from './images/image-1.jpg';
import img2 from './images/image-2.jpg';

import Header from './components/Header';
import {Button, SecondButton} from './elements/Buttons';
import {DishButton} from './components/Dish';
import {createGlobalStyle} from 'styled-components';
import Hero from './components/Hero';
import Banner from './components/Banner';
import {BasicInput} from './elements/Inputs';
import {RedBox, GreenBox} from './elements/Boxes';

function App() {
  return (
    <div>
      <GlobalStyle />

      <Header title="styled components course"/>

      <div>
        <GreenBox>
          <Button>click me</Button>
          <SecondButton>I'm second</SecondButton>
        </GreenBox>
      </div>

      <div>
        <RedBox>
          <DishButton size="10px">salad</DishButton>
          <DishButton size="1rem">soup</DishButton>
          <DishButton size="24px">steak</DishButton>
          <DishButton>sandwich</DishButton>
        </RedBox>
      </div>

      <div>
        <Hero img={img1}>
          <Banner title="this is my banner" />
        </Hero>
        <Hero img={img2} />
      </div>

      <BasicInput />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

export default App;
