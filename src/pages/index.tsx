import React from 'react';
import { PageWrapper } from '../Components';
import { HomeBanner, HomeMission, HomeTeam } from '../PageComponents';

const HomePage: React.FC = () => (
  <PageWrapper>
    <HomeBanner />
    <HomeMission />
    <HomeTeam />
  </PageWrapper>
);

export default HomePage;
