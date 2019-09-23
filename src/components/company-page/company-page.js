import React from 'react';
import './company-page.scss';

import Header from './parts/header';
import PromoStatistics from './parts/promo-statistics';
import Description from './parts/description';
import Report from './parts/report';
import SimilarCompanies from './parts/similar-companies';
import Footer from './parts/footer';

const CompanyPage = () => {
  return (
    <div className="company-page">
      <Header />
      <PromoStatistics />
      <Description />
      <Report />
      <SimilarCompanies />
      <Footer />
    </div>
  );
}

export default CompanyPage;
