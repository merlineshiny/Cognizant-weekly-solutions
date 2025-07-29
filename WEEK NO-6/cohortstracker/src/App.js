import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  const cohorts = [
    {
      title: 'INTADMPT01 – .NET FSD',
      startDate: 'Sep 2022',
      endDate: 'Dec 2022',
      coach: 'Arjun Rao',
      status: 'ongoing',
    },
    {
      title: 'ADMJ2J1014 – Java FSD',
      startDate: 'Aug 2021',
      endDate: 'Sep 2021',
      coach: 'Alexa Smith',
      status: 'completed',
    },
    {
      title: 'CDRJ2J1025 – Java FSD',
      startDate: 'Dec 2021',
      endDate: 'Dec 2021',
      coach: 'John Doe',
      status: 'completed',
    },
  ];

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>Cohorts Details</h1>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} {...cohort} />
      ))}
    </div>
  );
}

export default App;



