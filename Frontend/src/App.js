import React, { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NextPage from "./pages/Dashboard/Dashboard";
import EmployerList from "./pages/Employers/EmployerList";
import JobDetailPage from "./pages/Jobs/JobDetailPage";
import ChoosingSignInMethod from "./pages/ChoosingSignInMethod";
import JobList from "./pages/Jobs/JobList";
import ChoosingSignUpMethod from "./pages/ChoosingSignUpMethod";
import EmployerSignUpPage from "./pages/Employers/EmployerSignUpPage";
import SystemUserSignUpPage from "./pages/SystemUsers/SystemUserSignUpPage";
import JobAddPage from "./pages/Employers/JobAddPage";
import MyDrawer from "./layouts/MyDrawer";
import ProfilePage from "./pages/Profiles/ProfilePage";
import OffDay from "./pages/OffDay/OffDayControlPage";
import LearningMaterial from "./pages/LearningMaterial/LearningMaterialPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import CVScan from "./pages/CVScanning/CVScanningPage";

function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/dashboard" element={
              <div>
                  <MyDrawer/>
                  <Dashboard/>
              </div>}/>
          <Route path="/employers" element={
              <div>
                <MyDrawer/>
                <EmployerList />
             </div>}/>
        <Route path="/profile" element={
            <div>
              <MyDrawer/>
              <ProfilePage />
            </div>}/>
        <Route path="/offDay" element={
          <div>
              <MyDrawer/>
              <OffDay />
          </div>}/>
        <Route path="/learning" element={
          <div>
              <MyDrawer/>
              <LearningMaterial />
          </div>}/>
        <Route path="/cvscan" element={
          <div>
              <MyDrawer/>
              <CVScan/>
          </div>}/>
        <Route exact path="/jobs" element={<JobList/>} />
        <Route path="/jobs/:jobId" element={<JobDetailPage />} />
        <Route path="/signIn" element={<ChoosingSignInMethod />} />
        <Route path="/signIn/Employer" element={<JobList/>} />
        <Route path="/signup" element={<ChoosingSignUpMethod/>} />
        <Route path="/signup/employer" element={<EmployerSignUpPage/>} />
        <Route path="/signup/systemuser" element={<SystemUserSignUpPage/>} />
        <Route path="/employer/:employerId" element={<JobAddPage/>} />
        <Route
          path="/"
          element={
            auth ? (
              <Home setAuth={setAuth} />
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
