import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ icon, label, to = '#', isActive, onClick }) => {
  return (
    <li onClick={onClick}>
      <div className={isActive ? 'active' : ''} style={{ display: 'flex', alignItems: 'center' }}>
        <Link to={to} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'inherit', textDecoration: 'none' }}>
          {icon}
          <span>{label}</span>
        </Link>
      </div>
    </li>
  );
};

export default SidebarItem;