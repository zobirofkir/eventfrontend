import logo from './logo.png';
import './App.css';
import LoginScreen from './Screens/LoginScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterScreen from './Screens/RegisterScreen';
import DashboardScreen from './Screens/dashboard/DashboardScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginScreen/>}/>
        <Route path='register' element={<RegisterScreen/>}/>
        <Route path='dashboard' element={<DashboardScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
