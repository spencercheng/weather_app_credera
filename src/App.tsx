import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import styled, { createGlobalStyle } from "styled-components";

import HomePage from "./pages/HomePage";

const GlobalStyles = createGlobalStyle`
  html,body {
    margin: 0;
    padding: 0;
    color: black;
    font-family: Montserrat, sans-serif;
  }
  
  body {
    --primaryDarkerColor: #1a2b80;
    --primaryLighterColor: #758CFF;
    --complementaryColor: #EDC855;
    // text-shadow: 0 0 5px hsla(0, 0%, 0%, 0.5);
    min-height: 100vh;
    background-attachment: fixed;
    background-image: linear-gradient(to top right, #115DA3, #4ECFED);
  }
  button {
    text-shadow: 0 0 5px hsla(0, 0%, 0%, 0.5);
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  a {
    text-decoration: none;
    color: inherit
  }
`;
const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 25px;
  box-sizing: border-box;
`;

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppWrapper>
          <GlobalStyles />
          <Main>
            <HomePage />
          </Main>
          <ReactQueryDevtools position="bottom-right" />
        </AppWrapper>
      </QueryClientProvider>
    </>
  );
}

export default App;
