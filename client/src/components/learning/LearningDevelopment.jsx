import React, { useState } from 'react';

const LearningDevelopment = () => {
  const [trainings, setTrainings] = useState([
    {
      id: '1',
      employeeId: '1',
      title: 'React Advanced',
      status: 'In Progress',
      progress: 60,
      certification: 'Pending',
    },
    {
      id: '2',
      employeeId: '1',
      title: 'Leadership Training',
      status: 'Completed',
      progress: 100,
      certification: 'Issued',
    },
  ]);
  const [title, setTitle] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  const handleAddTraining = (e) => {
    e.preventDefault();
    // Mock API call to add training
    const newTraining = {
      id: String(trainings.length + 1),
      employeeId,
      title,
      status: 'Not Started',
      progress: 0,
      certification: 'Pending',
    };
    setTrainings([...trainings, newTraining]);
    setTitle('');
    setEmployeeId('');
  };

  const handleUpdateProgress = (id, newProgress) => {
    // Mock API call to update progress
    setTrainings(
      trainings.map((training) =>
        training.id === id
          ? {
              ...training,
              progress: newProgress,
              status: newProgress === 100 ? 'Completed' : 'In Progress',
              certification: newProgress === 100 ? 'Issued' : training.certification,
            }
          : training
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Learning & Development</h1>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Add New Training</h2>
        <form onSubmit={handleAddTraining}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Employee ID</label>
            <input
              type="text"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Training Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Add Training
          </button>
        </form>
      </div>
      <h2 className="text-lg font-semibold mb-4">Training Tracking</h2>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">ID</th>
            <th className="p-2">Employee ID</th>
            <th className="p-2">Title</th>
            <th className="p-2">Status</th>
            <th className="p-2">Progress</th>
            <th className="p-2">Certification</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainings.map((training) => (
            <tr key={training.id}>
              <td className="p-2">{training.id}</td>
              <td className="p-2">{training.employeeId}</td>
              <td className="p-2">{training.title}</td>
              <td className="p-2">{training.status}</td>
              <td className="p-2">{training.progress}%</td>
              <td className="p-2">{training.certification}</td>
              <td className="p-2">
                <button
                  onClick={() => handleUpdateProgress(training.id, Math.min(training.progress + 10, 100))}
                  className="text-blue-500"
                >
                  Update Progress
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LearningDevelopment;