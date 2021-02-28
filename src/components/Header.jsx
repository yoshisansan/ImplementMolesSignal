import React from 'react';
import styled from 'styled-components'; 

const HeaderWrap = styled.div`
  background-color: #fffae3;
  height: 160px;
  width: 100%;
  h1 {
    line-height: 160px;
    color: #ffbae0;
    text-align: center;
  }
`;

const Header = () => {
  return(
    <HeaderWrap>
      <h1>PUIPUIモールス信号</h1>
    </HeaderWrap>
  )
}

export default Header;