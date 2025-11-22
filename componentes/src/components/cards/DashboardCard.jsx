import React from 'react';

const DashboardCard = ({ title, value, footerText, valueClassName = '' }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      {}
      <p className={valueClassName}>{value}</p>
      <small>{footerText}</small>
    </div>
  );
};

export default DashboardCard;