import React, { useState } from 'react';

const LeaveManagement = () => {
  const [leaves, setLeaves] = useState([
    { id: '1', employeeId: '1', type: 'Sick', startDate: '2025-07-01', endDate: '2025-07-03', status: 'Approved' },
    { id: '2', employeeId: '1', type: 'Annual', startDate: '2025-08-10', endDate: '2025-08-15', status: 'Pending' },
  ]);
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock API call to submit leave
    const newLeave = {
      id: String(leaves.length + 1),
      employeeId: '1',
      type: leaveType,
      startDate,
      endDate,
      status: 'Pending',
    };
    setLeaves([...leaves, newLeave]);
    setLeaveType('');
    setStartDate('');
    setEndDate('');
  };

  const handleApprove = (id) => {
    // Mock API call to approve leave
    setLeaves(leaves.map((leave) => (leave.id === id ? { ...leave, status: 'Approved' } : leave)));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Leave Management</h1>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Apply for Leave</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Leave Type</label>
            <select
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            >
              <option value="">Select</option>
              <option value="Casual">Casual</option>
              <option value="Sick">Sick</option>
              <option value="Annual">Annual</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Apply for Leave
          </button>
        </form>
      </div>
      <h2 className="text-lg font-semibold mb-4">Leave History</h2>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">ID</th>
            <th className="p-2">Employee ID</th>
            <th className="p-2">Type</th>
            <th className="p-2">Start Date</th>
            <th className="p-2">End Date</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id}>
              <td className="p-2">{leave.id}</td>
              <td className="p-2">{leave.employeeId}</td>
              <td className="p-2">{leave.type}</td>
              <td className="p-2">{leave.startDate}</td>
              <td className="p-2">{leave.endDate}</td>
              <td className="p-2">{leave.status}</td>
              <td className="p-2">
                {leave.status === 'Pending' && (
                  <button
                    onClick={() => handleApprove(leave.id)}
                    className="text-green-500 mr-2"
                  >
                    Approve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveManagement;