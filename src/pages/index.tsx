import React from 'react';
import { PageWrapper } from '../Components';
import { HomeBanner, HomeMission, HomeQAndA, HomeTeam } from '../PageComponents';

const HomePage: React.FC = () => (
  <PageWrapper>
    <HomeBanner />
    <HomeMission />
    <HomeTeam />
    <HomeQAndA />
  </PageWrapper>
);

export default HomePage;
