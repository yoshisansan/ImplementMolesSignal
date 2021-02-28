import React, {Fragment} from 'react';
import PUIcontainer from "./containers/PUIcontainer.jsx";
import Layout from './components/Layout.jsx';
import { createGlobalStyle } from 'styled-components';
import DocumentMeta from 'react-document-meta';
import reset from 'styled-reset';

const meta = {
  title: 'PUIPUIモールス信号',
  description: 'モールス信号をあのモルモットの鳴き声で再現しました。',
  canonical: 'https://puipui-morse.vercel.app',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'PUIPUIモルカー,モールス信号変換'
    }
  }
};

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: "Hiragino Kaku Gothic ProN", 
    "Helvetica Neue",
    Arial,
    "Hiragino Sans",
    Meiryo,
    sans-serif;
    font-size: 16px;
  }
  
  h1{
    font-size: 28px;
    font-weight: bold;
  }
  
  input, textarea {
    background-color: #fff;
    border: 1px solid transparent;
    transition: border 0.2s ease-out;
    color: inherit;
    outline: 0;
  }
  
  textarea {
    height: 120px;
    font-size: 14px;
    line-height: 1.414;
    padding: 8px 12px; 
    letter-spacing: 1.6px;
  }
  
  input {
    height: 46px;
    font-size: 14px;
    padding: 8px 12px;
  }

  input:focus, textarea:focus {
    border: 3px solid #ffbae0;
  }
`;

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <DocumentMeta>
      <Layout>
        <PUIcontainer />
      </Layout>
      </DocumentMeta>
    </Fragment>
  );
}
