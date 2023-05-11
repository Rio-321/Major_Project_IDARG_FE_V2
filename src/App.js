import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< Updated upstream
import './App.css';
import LandingPage from './component/view/LandingPage';
import UploadResume from './component/view/UploadResume';
import DashBoard from './component/view/DashBoard';
=======
import LandingPage from '../src/view/LandingPage'

// import LandingPage from './component/view/LandingPage';
import UploadResume from '../src/view//UploadResume';
import CompanyDashBoard from './Dashboards/CompanyAdmin';
import StudentInfo from '../src/view/StudentInfo';
import ContactUs from '../src/view/ContactUs';
import AboutUs from '../src/view/AboutUs';
import StudentDashboard from './Dashboards/StudentAdmin';
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path='/uploadresume' element={<UploadResume/>} />
<<<<<<< Updated upstream
        <Route path='/dashboard' element={<DashBoard/>} />
        
=======
        <Route path='/companydashboard' element={<CompanyDashBoard/>} />
        <Route path='/studentinfo' element = { <StudentInfo/> } />
        <Route path='/aboutus' element = { <AboutUs/> } />
        <Route path='/contactus' element = { <ContactUs/>} />
        <Route path='/studentdashboard' element = { <StudentDashboard/>} />
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
}

export default App;
