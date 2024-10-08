import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getCTCAnalysis } from '../data/recruitmentData';

const CTCAnalysisChart = () => {
  const data = getCTCAnalysis();

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Average CTC by Program</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="program" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="avgCTC" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CTCAnalysisChart;