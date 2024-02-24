import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NextPage from "./pages/NextPage";
import EmployerList from "./pages/Employers/EmployerList";
import JobDetailPage from "./pages/Jobs/JobDetailPage";
import ChoosingSignInMethod from "./pages/ChoosingSignInMethod";
import JobList from "./pages/Jobs/JobList";
import ChoosingSignUpMethod from "./pages/ChoosingSignUpMethod";
import EmployerSignUpPage from "./pages/Employers/EmployerSignUpPage";
import SystemUserSignUpPage from "./pages/SystemUsers/SystemUserSignUpPage";
import JobAddPage from "./pages/Employers/JobAddPage";

function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/signup" element={<Signup setAuth={setAuth} />} />
        <Route path="/nextPage" element={<NextPage />}/>
        <Route path="/employers" element={<EmployerList />}/>
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
