import React, {useState} from 'react';
import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import {ThemeProvider} from 'styled-components';

import {redTheme, blueTheme, greenTheme} from 'components/Themes';
import Login from 'pages/Login';
import Home from 'pages/Home';

const themes = [
  redTheme,
  blueTheme,
  greenTheme
]

function App() {
  const [theme, setTheme] = useState(0);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />

      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home theme={theme} setTheme={setTheme} themes={themes} />
          </Route>
        </Switch>
      </BrowserRouter>

      
    </ThemeProvider>
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
