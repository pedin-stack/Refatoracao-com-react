// components/Sidebar.jsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logoImg from '../../assets/images/cap-coat-of-arms.png';
import SidebarItem from './SidebarItem';
import IconDashboard from '../icons/IconDashboard';
import IconEvents from '../icons/IconEvents';
import IconMember from '../icons/IconMember';
import IconTreasury from '../icons/IconTreasury';
import IconSettings from '../icons/IconSettings';
import IconProfile from '../icons/IconProfile';
import IconPower from '../icons/IconPower';

const Sidebar = ({ isCollapsed: collapsedProp, toggleSidebar: toggleProp }) => {
  // estado interno usado quando não é controlado por props
  const [internalCollapsed, setInternalCollapsed] = useState(true);
  const location = useLocation();

  const isCollapsed = typeof collapsedProp === 'boolean' ? collapsedProp : internalCollapsed;
  const toggleSidebar = typeof toggleProp === 'function' ? toggleProp : () => setInternalCollapsed(!internalCollapsed);
  const menuItems = [
    {
      label: 'Dashboard',
      to: '/dashboard',
      active: false,
      icon: <IconDashboard />
    },
    {
      label: 'Eventos',
      to: '/eventos',
      active: false,
      icon: <IconEvents />
    },
    {
      label: 'Usuários',
      to: '/users',
      active: false,
      icon: <IconProfile />
    },
    {
      label: 'Membros',
      to: '/membros',
      active: false,
      icon: <IconMember />
    },
    {
      label: 'Tesouraria',
      to: '/tesouraria',
      active: false,
      icon: <IconTreasury />
    },
    {
      label: 'Configurações',
      to: '/config',
      active: false,
      icon: <IconSettings />
    }
    ,
    {
      label: 'Desconectar',
      to: '/login',
      active: false,
      icon: <IconPower />
    }
  ];

  return (
    <nav className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <header className="sidebar-header">
        <img src={logoImg} alt="Logo" className="logo" />
        <div className="header-text">
          <span className="chapter-name">Liberdade Harmoniosa</span>
          <span className="chapter-number">Capítulo n° 387</span>
        </div>
      </header>

      <button className="toggle-btn" onClick={toggleSidebar}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={isCollapsed ? "M8.5 19L15.5 12L8.5 5" : "M15.5 19L8.5 12L15.5 5"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <ul className="menu-items">
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            isActive={location.pathname === item.to || (item.to !== '/' && location.pathname.startsWith(item.to))}
            to={item.to}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;