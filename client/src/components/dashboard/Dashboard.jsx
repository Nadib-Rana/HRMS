import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = ({ user }) => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Attendance',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        {user.role === 'admin' ? 'Admin Dashboard' : 'Employee Dashboard'}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Attendance Overview</h2>
          <Bar data={data} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <ul className="mt-2 space-y-2">
            <li>Leave Request Approved</li>
            <li>Salary Updated</li>
            <li>Happy Birthday, John!</li>
          </ul>
        </div>
        {user.role === 'admin' && (
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">Quick Actions</h2>
            <ul className="mt-2 space-y-2">
              <li><button className="text-blue-500">Add New Employee</button></li>
              <li><button className="text-blue-500">Post New Job</button></li>
              <li><button className="text-blue-500">Generate Payroll</button></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;