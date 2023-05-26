import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Intro  from './pages/Intro';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Register from './pages/Register';
import TestMenu from './pages/TestMenu';
import LearnMenu from './pages/LearnMenu';
import LearnSection from './pages/LearnSection';
import TestSection from './pages/TestSection';
import Subject from './pages/Subject';
import ScrollTopInstant from './ScrollTopInstant';
import UserProfile from './pages/UserProfile';
import Test from './pages/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollTopInstant />
        <Routes>
          <Route index element={<Intro />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/zaloguj-sie" element={<Login />} />
          <Route path="/zarejestruj-sie" element={<Register />} />
          <Route path="/menu-ucz-sie" element={<LearnMenu />} />
          <Route path="/menu-testy" element={<TestMenu />} />
          <Route path="/ucz-sie-dzial" element={<LearnSection />} />
          <Route path="/testy-dzial" element={<TestSection />} />
          <Route path="/temat" element={<Subject />} />
          <Route path="/profil" element={<UserProfile />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
