import './styles/App.css';
import { useState } from 'react';
// keeps state in app
const CustomApp = ({ Component, pageProps }) => {

  return (
    <Component {...pageProps} />
  );
};

export default CustomApp