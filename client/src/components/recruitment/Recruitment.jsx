import React, { useState } from 'react';

const Recruitment = () => {
  const [jobs, setJobs] = useState([
    { id: '1', title: 'Software Engineer', department: 'IT', status: 'Open' },
    { id: '2', title: 'HR Manager', department: 'HR', status: 'Closed' },
  ]);
  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('');

  const handlePostJob = (e) => {
    e.preventDefault();
    // Mock API call to post job
    const newJob = { id: String(jobs.length + 1), title, department, status: 'Open' };
    setJobs([...jobs, newJob]);
    setTitle('');
    setDepartment('');
  };

  const handleSendInterviewEmail = (id) => {
    // Mock API call to send interview email
    alert(`Interview email sent for job ID: ${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Recruitment</h1>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Post New Job</h2>
        <form onSubmit={handlePostJob}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Job Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Department</label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Post Job
          </button>
        </form>
      </div>
      <h2 className="text-lg font-semibold mb-4">Job Postings</h2>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">ID</th>
            <th className="p-2">Title</th>
            <th className="p-2">Department</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td className="p-2">{job.id}</td>
              <td className="p-2">{job.title}</td>
              <td className="p-2">{job.department}</td>
              <td className="p-2">{job.status}</td>
              <td className="p-2">
                <button
                  onClick={() => handleSendInterviewEmail(job.id)}
                  className="text-blue-500"
                >
                  Send Interview Email
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recruitment;