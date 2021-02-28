import React from 'react';
import Header from './Header.jsx';
import styled from 'styled-components'; 

const Background = styled.div`
  background-color: #fffae3;
  width: 100vw;
  padding-bottom: 120px;
`;

const MainContent = styled.div`
  width: 320px;
  margin: 0 auto;
`;

const Layout = ({children}) => {
  return(
    <Background>
      <MainContent>
      <Header />
      {children}
      </MainContent>      
    </Background>
  )
}

export default Layout;