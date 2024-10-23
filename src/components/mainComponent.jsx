import React from 'react';
import Header from './header/header';
import Body from './body/body';
import Footer from './footer/footer';
const MainComponent = () => {
  return (
    <div>
      <Header></Header>
      <div className="mb-5">
      <Body></Body>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MainComponent
