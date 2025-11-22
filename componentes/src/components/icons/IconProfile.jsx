import React from 'react';

const IconProfile = ({ size = 24, color = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="3" />
    <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
  </svg>
);

export default IconProfile;
