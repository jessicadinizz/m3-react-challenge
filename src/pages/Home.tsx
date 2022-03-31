import React from 'react';

import Header from '../components/Header/Header'
import TopCard  from '../components/TopCard/TopCard';
import Principal from '../components/MainContent/Principal';
import Newsletter from '../components/Newsletter/Newsletter';
import Infos from '../components/Infos/Infos';
import Footer from '../components/Footer/Footer';
import Buttons from '../components/Buttons/Buttons';

function Home() {
  return (
    <div>
      <Header />
      <TopCard />
      <Principal />
      <Buttons />
      <Newsletter />
      <Infos />
      <Footer />

      
    </div>
  );
}

export default Home;
