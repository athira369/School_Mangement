import React, { useState } from 'react';
import { 
  ReportsContainer, 
  Title, 
  ReportSelectionSection, 
  Description, 
  ReportList, 
  ReportItem, 
  GenerateButton,
  FormContainer, 
  FormGroup, 
  Label, 
  Input, 
  AlertMessage,
 
} from '../../styles/ReportStyles';
import Sidebar from './Sidebar';
import ReportDisplay from '../../components/ReportDisplay.';

const Reports = () => {
  // State to handle the selected report and form fields
  const [selectedReport, setSelectedReport] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reportData, setReportData] = useState(null);
  const [error, setError] = useState('');

  // Function to handle report selection
  const handleReportSelect = (report) => {
    setSelectedReport(report);
    setReportData(null); // Reset the report data when a new report is selected
  };

  // Function to handle report generation
  const handleGenerateReport = async () => {
    if (!selectedReport || !startDate || !endDate) {
      setError('Please fill out the form completely.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/generate-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reportType: selectedReport,
          startDate,
          endDate,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate the report.');
      }

      const data = await response.json();
      setReportData(data.report);
      setError('');
    } catch (err) {
      setError('Error generating the report: ' + err.message);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar /> {/* Sidebar component */}

      <ReportsContainer>
        <Title>Reports</Title>
        <ReportSelectionSection>
          <Description>Select a report to generate:</Description>
          <ReportList>
            <ReportItem onClick={() => handleReportSelect('Books Report')}>
              Books Report
            </ReportItem>
            <ReportItem onClick={() => handleReportSelect('Member Report')}>
              Member Report
            </ReportItem>
            <ReportItem onClick={() => handleReportSelect('Borrowing History')}>
              Borrowing History
            </ReportItem>
          </ReportList>

          {selectedReport && (
            <FormContainer>
              <FormGroup>
                <Label htmlFor="startDate">Start Date:</Label>
                <Input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="endDate">End Date:</Label>
                <Input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </FormGroup>

              {error && <AlertMessage>{error}</AlertMessage>}

              <GenerateButton onClick={handleGenerateReport}>
                Generate Report
              </GenerateButton>
            </FormContainer>
          )}
        </ReportSelectionSection>

        {reportData && (
          <ReportDisplay reportData={reportData} selectedReport={selectedReport} />
        )}
       
      </ReportsContainer>
    </div>
  );
};

export default Reports;
