import React, {useState} from 'react';
import './App.css';
import img1 from 'images/image-1.jpg';
import img2 from 'images/image-2.jpg';

import Header from 'components/Header';
import {Button, SecondButton} from 'elements/Buttons';
import {DishButton} from 'components/Dish';
import {createGlobalStyle} from 'styled-components';
import Hero from 'components/Hero';
import Banner from 'components/Banner';
import {BasicInput} from 'elements/Inputs';
import {RedBox, GreenBox} from 'elements/Boxes';
import {ThemeProvider} from 'styled-components';
import {redTheme, blueTheme, greenTheme} from 'components/Themes';
import Navbar from 'components/Navbar';
import Content from 'components/Content';

const themes = [
  redTheme,
  blueTheme,
  greenTheme
]

function App() {
  const [theme, setTheme] = useState(0);

  const handleTheme = () => {
    setTheme((theme + 1) % themes.length);
  }

  return (
    <ThemeProvider theme={themes[theme]}><main>
      <GlobalStyle />

      <Header title="styled components course"/>

      <Navbar>
        <SecondButton onClick={() => {setTheme((theme + 1) % themes.length)}}>Change Theme</SecondButton>
      </Navbar>

      <Content>
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
      </Content>
    </main></ThemeProvider>
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
