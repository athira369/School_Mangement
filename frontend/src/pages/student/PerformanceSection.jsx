import React from 'react';
import Sidebar from './Sidebar';
import { Line } from 'react-chartjs-2'; // Import Line component
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js'; // Import required components from chart.js

import {
  PerformanceContainer,
  SidebarContainer,
  Content,
  PerformanceHeader,
  PerformanceInfo,
  PerformanceGraphContainer,
  TotalMarks,
} from '../../styles/PerformanceStyles'; // Import styled components from PerformanceSectionStyles.js

// Register required chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const PerformanceSection = () => {
  // Sample performance data
  const performanceData = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    marks: [80, 85, 90, 88, 92, 85], // Sample marks for each month
    totalMarks: 520 // Sample total marks for the year
  };

  // Line chart data
  const lineChartData = {
    labels: performanceData.months,
    datasets: [
      {
        label: 'Performance Trends',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        data: performanceData.marks
      }
    ]
  };

  // Chart options (updated for Chart.js v3+)
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true, // Ensures the y-axis starts at zero
      }
    }
  };

  return (
    <PerformanceContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <PerformanceHeader>Performance</PerformanceHeader>
        <PerformanceInfo>
          <PerformanceGraphContainer>
            <Line
              data={lineChartData} // Pass chart data
              options={chartOptions} // Pass chart options
            />
          </PerformanceGraphContainer>
          <TotalMarks>Total Marks: {performanceData.totalMarks}</TotalMarks>
        </PerformanceInfo>
      </Content>
    </PerformanceContainer>
  );
};

export default PerformanceSection;
