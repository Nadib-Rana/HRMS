import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import EmployeeManagement from './components/employees/EmployeeManagement';
import LeaveManagement from './components/leaves/LeaveManagement';
import Attendance from './components/attendance/Attendance';
import Recruitment from './components/recruitment/Recruitment';
import Payroll from './components/payroll/Payroll';
import LearningDevelopment from './components/learning/LearningDevelopment';
import Performance from './components/performance/Performance';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import { AddEmployee } from './components/employees/AddEmployee';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {user ? (
        <div className="flex">
          <Sidebar role={user.role} />
          <div className="flex-1">
            <Navbar user={user} setUser={setUser} />
            <Routes>
              <Route path="/dashboard" element={<Dashboard user={user} />} />
              {user.role === 'admin' && (
                <>
                  <Route path="/employees" element={<EmployeeManagement />} />
                  <Route path="/leaves" element={<LeaveManagement />} />
                  <Route path="/attendance" element={<Attendance />} />
                  <Route path="/recruitment" element={<Recruitment />} />
                  <Route path="/payroll" element={<Payroll />} />
                  <Route path="/learning" element={<LearningDevelopment />} />
                  <Route path="/performance" element={<Performance />} />
                  <Route path="/addEmployee" element={<AddEmployee />} />
                  
                </>
              )}
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </div>
  );
};

export default App;