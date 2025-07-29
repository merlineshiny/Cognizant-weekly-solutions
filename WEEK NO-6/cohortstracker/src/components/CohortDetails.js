import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ title, startDate, endDate, coach, status }) => {
  return (
    <div className={styles.box}>
      <h3 style={{ color: status === 'ongoing' ? 'green' : 'blue' }}>
        {title}
      </h3>
      <p><strong>Started On:</strong> {startDate}</p>
      <p><strong>Ends On:</strong> {endDate}</p>
      <p><strong>Coach:</strong> {coach}</p>
      <p><strong>Status:</strong> {status}</p>
    </div>
  );
};

export default CohortDetails;
