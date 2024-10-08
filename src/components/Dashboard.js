import React from 'react';
import CompanyChart from './CompanyChart';
import RecruitmentTrendChart from './RecruitmentTrendChart';
import CTCAnalysisChart from './CTCAnalysisChart';
import ProgramDistributionChart from './ProgramDistributionChart';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recruitment Analysis Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CompanyChart />
        <RecruitmentTrendChart />
        <CTCAnalysisChart />
        <ProgramDistributionChart />
      </div>
    </div>
  );
};

export default Dashboard;