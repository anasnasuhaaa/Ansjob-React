import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import JobVacancy from "./pages/JobVacancy";
import JobDetail from "./pages/JobDetail";
import  { GlobalProvider } from "./context/GlobalContext";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashborad";
import DashboardTable from "./pages/DashboradTable";
import DashboardAddNewJob from "./pages/DashboardAddNewJob";
import NotFound from "./pages/404";

function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalProvider> 
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<SignUp/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/list-job-vacancy" element={<DashboardTable/>}></Route>
          <Route path="/list-job-vacancy/form" element={<DashboardAddNewJob/>}></Route>
          <Route path="/list-job-vacancy/edit/:id" element={<DashboardAddNewJob/>}></Route>
          <Route path="/job-vacancy" element={<JobVacancy />}></Route>
          <Route path="/job-vacancy/:id" element={<JobDetail />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
