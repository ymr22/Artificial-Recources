import React, { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NextPage from "./pages/Dashboard/Dashboard";
import EmployerList from "./pages/Employers/EmployerList";
import MyDrawer from "./layouts/MyDrawer";
import ProfilePage from "./pages/Profiles/ProfilePage";
import OffDay from "./pages/OffDay/OffDayControlPage";
import LearningMaterial from "./pages/LearningMaterial/LearningMaterialPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import CVScan from "./pages/CVScanning/CVScanningPage";
import ChooseUser from "./pages/ChooseUser";
import ApplyJob from "./pages/ApplyJob/ApplyJob";
import OffDayConfirmation from "./pages/OffDay/OffDayConfirmation";

function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/chooseLoginType" element={
            <div>
                <ChooseUser/>
            </div>} />
          <Route path="/apply-login" element={
              <div>
                  <ApplyJob/>
              </div>} />
          <Route path="/login" element={<Login setAuth={setAuth}/>}/>
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
        <Route path="/offDayConfirm" element={
          <div>
              <MyDrawer/>
              <OffDayConfirmation />
          </div>}/>
        <Route
          path="/"
          element={
            auth ? (
              <Home setAuth={setAuth} />
            ) : (
              <Navigate to="/chooseLoginType" state={{ from: location }} replace />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
