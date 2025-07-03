import React, { useState } from 'react';

const Payroll = () => {
  const [salaries, setSalaries] = useState([
    { id: '1', employeeId: '1', month: '2025-07', amount: 5000, status: 'Paid' },
    { id: '2', employeeId: '1', month: '2025-08', amount: 5100, status: 'Pending' },
  ]);

  const handleDownloadPayslip = (id) => {
    // Mock API call to download payslip
    alert(`Downloading payslip for ID: ${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Payroll</h1>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">ID</th>
            <th className="p-2">Employee ID</th>
            <th className="p-2">Month</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map((salary) => (
            <tr key={salary.id}>
              <td className="p-2">{salary.id}</td>
              <td className="p-2">{salary.employeeId}</td>
              <td className="p-2">{salary.month}</td>
              <td className="p-2">${salary.amount}</td>
              <td className="p-2">{salary.status}</td>
              <td className="p-2">
                <button
                  onClick={() => handleDownloadPayslip(salary.id)}
                  className="text-blue-500"
                >
                  Download Payslip
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payroll;