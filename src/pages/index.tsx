import React from 'react';
import { ContactSection, Footer, PageWrapper } from '../Components';
import { HomeBanner, HomeMission, HomeQAndA, HomeTeam } from '../PageComponents';

const HomePage: React.FC = () => (
  <PageWrapper>
    <HomeBanner />
    <HomeMission />
    <HomeTeam />
    <HomeQAndA />
    <ContactSection />
    <Footer />
  </PageWrapper>
);

export default HomePage;
