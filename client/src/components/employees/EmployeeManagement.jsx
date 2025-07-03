import React, { useState } from 'react';
import { AddEmployee } from './AddEmployee';
import { Link } from 'react-router-dom';
const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([
    { id: '1', name: 'John Doe', department: 'IT', designation: 'Developer', skills: ['React', 'JavaScript'], experience: 5 },
   { id: '2', name: 'John Doe', department: 'IT', designation: 'Developer', skills: ['React', 'JavaScript'], experience: 5 },
  
  ]);
  const [search, setSearch] = useState('');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Employee Management</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by skills, experience, or ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button className="mb-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
        Add Employee
      </button>
      <Link to="/addEmployee" className="mb-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
        <AddEmployee />
      </Link>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Department</th>
            <th className="p-2">Designation</th>
            <th className="p-2">Skills</th>
            <th className="p-2">Experience</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td className="p-2">{emp.id}</td>
              <td className="p-2">{emp.name}</td>
              <td className="p-2">{emp.department}</td>
              <td className="p-2">{emp.designation}</td>
              <td className="p-2">{emp.skills.join(', ')}</td>
              <td className="p-2">{emp.experience} years</td>
              <td className="p-2">
                <button className="text-blue-500 mr-2">Edit</button>
                <button className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeManagement;