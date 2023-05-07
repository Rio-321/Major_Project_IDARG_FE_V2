import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './component/view/LandingPage';
import UploadResume from './component/view/UploadResume';
import DashBoard from './component/view/DashBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path='/uploadresume' element={<UploadResume/>} />
        <Route path='/dashboard' element={<DashBoard/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
