import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error } from './pages';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
