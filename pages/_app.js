import './styles/App.css';
import { useState } from 'react';
import { wrapper } from "../redux/store"
// keeps state in app
const CustomApp = ({ Component, pageProps }) => {

  return (
    <Component {...pageProps} />
  );
};

export default wrapper.withRedux(CustomApp);