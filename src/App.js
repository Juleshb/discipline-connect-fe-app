
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/login';
import Admin from './adimin';
import Students from './components/Metron/Students';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/adimin" element={<Admin/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/adimin/sutudent" element ={<Students />} />
          <Route path="*" element={<Navigate to="/adimin" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
