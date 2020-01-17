import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled'
import { useTheme } from './theme';


const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;

  background-color: ${() => {
    return useTheme().colors.yellow
  }};

  color: ${() => {
    return useTheme().colors.red
  }};
`

const App: React.FC = () => {
  return (
    <Wrapper className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Wrapper>
  );
}

export default App;
