import React from 'react';
import { PageWrapper } from '../Components';
import { HomeBanner, HomeMission } from '../PageComponents';

const HomePage: React.FC = () => (
  <PageWrapper>
    <HomeBanner />
    <HomeMission />
  </PageWrapper>
);

export default HomePage;
