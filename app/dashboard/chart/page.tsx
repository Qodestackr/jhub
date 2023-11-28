import { Metadata } from 'next';

import RevenueChart from '../../../components/Charts/RevenueChart';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import ProfitChart from '../../../components/Charts/ProfitChart';
import VisitorAnalyticsChart from '../../../components/Charts/VisitorAnalyticsChart';
import VisitorAnalyticsFunnel from '../../../components/Charts/VisitorAnalyticsFunnel';

const Chart = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <VisitorAnalyticsChart />
        </div>
        <RevenueChart />
        <ProfitChart />
        <VisitorAnalyticsFunnel />
      </div>
    </>
  );
};

export default Chart;
