import React, { useState } from 'react';

const Attendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([
    { id: '1', employeeId: '1', date: '2025-07-01', checkIn: '09:00', checkOut: '17:00' },
    { id: '2', employeeId: '1', date: '2025-07-02', checkIn: '09:15', checkOut: '16:45' },
  ]);

  const handleCheckIn = () => {
    // Mock API call to record check-in
    const newRecord = {
      id: String(attendanceRecords.length + 1),
      employeeId: '1',
      date: new Date().toISOString().split('T')[0],
      checkIn: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      checkOut: '',
    };
    setAttendanceRecords([...attendanceRecords, newRecord]);
  };

  const handleCheckOut = (id) => {
    // Mock API call to record check-out
    setAttendanceRecords(
      attendanceRecords.map((record) =>
        record.id === id
          ? { ...record, checkOut: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
          : record
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Attendance Tracking</h1>
      <button
        onClick={handleCheckIn}
        className="mb-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
      >
        Check In
      </button>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">ID</th>
            <th className="p-2">Employee ID</th>
            <th className="p-2">Date</th>
            <th className="p-2">Check In</th>
            <th className="p-2">Check Out</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record) => (
            <tr key={record.id}>
              <td className="p-2">{record.id}</td>
              <td className="p-2">{record.employeeId}</td>
              <td className="p-2">{record.date}</td>
              <td className="p-2">{record.checkIn}</td>
              <td className="p-2">{record.checkOut || '-'}</td>
              <td className="p-2">
                {!record.checkOut && (
                  <button
                    onClick={() => handleCheckOut(record.id)}
                    className="text-blue-500"
                  >
                    Check Out
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

export default Attendance;