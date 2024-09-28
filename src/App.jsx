import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header';
import Home from '@mui/icons-material/Home';
import TapTap from './components/TapTap/TapTap';
import Register from './components/Register/Register';


const headerNav = [
  { url: "/", title: "Home", icon: <Home />},
];

function App() {
  return (
    <BrowserRouter>
      <Header headerNav={headerNav} />
      <Routes>
        <Route path="/" exact element={<TapTap/>} />
        <Route path="/profile" exact element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
