import React from 'react';
import { Helmet } from "react-helmet";

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App=() => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>GERICHT</title>
      <link rel="canonical" href="https://gpt3blog.netlify.app/" />
      <meta name="description" content="GERICHT-RESTAURANT" />
    </Helmet>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
