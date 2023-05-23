import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Intro  from './pages/Intro';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Intro />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/zaloguj-sie" element={<Login />} />
          <Route path="/zarejestruj-sie" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
