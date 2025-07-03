import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ role }) => {
  const menuItems = [
    { path: '/dashboard', label: 'Dashboard' },
    ...(role === 'admin'
      ? [
          { path: '/employees', label: 'Employee Management' },
          { path: '/leaves', label: 'Leave Management' },
          { path: '/attendance', label: 'Attendance' },
          { path: '/recruitment', label: 'Recruitment' },
          { path: '/payroll', label: 'Payroll' },
          { path: '/learning', label: 'Learning & Development' },
          { path: '/performance', label: 'Performance' },
        ]
      : [
          { path: '/leaves', label: 'My Leaves' },
          { path: '/attendance', label: 'My Attendance' },
          { path: '/payroll', label: 'My Payroll' },
          { path: '/learning', label: 'My Training' },
          { path: '/performance', label: 'My Performance' },
        ]),
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;