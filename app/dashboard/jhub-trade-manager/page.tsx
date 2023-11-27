import React from 'react';
import ECommerce from '../../../components/Dashboard/E-commerce';
import DashboardWelcomeBanner from '../../../components/Dashboard/_components/DashboardWelcomeBanner';

export default function JHUBTrade() {
  return (
    <div>
      <DashboardWelcomeBanner bannerText="The JHUB Management Portal" />
      <ECommerce />
    </div>
  );
}
