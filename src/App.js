import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error, ProtectedRoute } from './pages';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Layout from './pages/Layout';
import Home from './pages/home/Home';
import ChurchIntro from './pages/intro/ChurchIntro';
import OldPastorIntro from './pages/intro/OldPastorIntro';
import SeniorPastorIntro from './pages/intro/SeniorPastorIntro';
import WorshipPeopleIntro from './pages/intro/WorshipPeopleIntro';
import Manage from './pages/manage/Manage';
import News from './pages/news/News';
import ComeGuide from './pages/guide/ComeGuide';
import FacilityGuide from './pages/guide/FacilityGuide';
import FamilyGuide from './pages/guide/FamilyGuide';
import OfferingGuide from './pages/guide/OfferingGuide';
import WorshipGuide from './pages/guide/WorshipGuide';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="intro-church" element={<ChurchIntro />} />
          <Route path="intro-old-pastor" element={<OldPastorIntro />} />
          <Route path="intro-senior-pastor" element={<SeniorPastorIntro />} />
          <Route path="intro-worship-people" element={<WorshipPeopleIntro />} />
          <Route path="manage" element={<Manage />} />
          <Route path="news" element={<News />} />
          <Route path="guide-come" element={<ComeGuide />} />
          <Route path="guide-facility" element={<FacilityGuide />} />
          <Route path="guide-family" element={<FamilyGuide />} />
          <Route path="guide-offering" element={<OfferingGuide />} />
          <Route path="guide-worship" element={<WorshipGuide />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="error" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
