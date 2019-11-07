import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './header';
import JokeDisplay from './Joke';
import HomePage from './HomePage';
import DadJokes from './DadJokes';
import TechJokes from './TechJoke';
import BadJokes from './BadJokes';
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";
import SavedList from './SavedList'

const GlobalStyles = createGlobalStyle`
  body {
    @import url("https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap");
    font-family: 'Permanent Marker', cursive;;
  }
`

const Page = styled.div`
background: purple;
min-height: 50vh;
width: 90%;
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
margin: auto;
border-radius: 10%;
`
const Background = styled.div`
background: pink;
min-height: 100vh;
`

function App() {
  return (
    <Background>
      <Router>
        <GlobalStyles />
        <Header />
        <Page>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Chuck-Noris" component={JokeDisplay} />
            <Route exact path="/Dad-Jokes" component={DadJokes} />
            <Route exact path="/Tech-Jokes" component={TechJokes} />
            <Route exact path="/Bad-Jokes" component={BadJokes} />
          </Switch>
        </Page>
      </Router>
      <SavedList />
    </Background>
  );
}

export default App;
