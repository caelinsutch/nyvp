import React from 'react';
import { ContactSection, Footer, PageWrapper } from '../Components';
import { HomeBanner, HomeMission, HomeQAndA, HomeTeam } from '../PageComponents';
import Navbar from '../Components/Navbar';

const HomePage: React.FC = () => (
  <PageWrapper>
    <Navbar />
    <HomeBanner />
    <HomeMission />
    <HomeTeam />
    <HomeQAndA />
    <ContactSection />
    <Footer />
  </PageWrapper>
);

export default HomePage;
