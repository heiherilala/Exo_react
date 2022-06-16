import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aceul from './pages/Aceul';
import TablePage from './pages/TablePage';

function App() {
  return (
    <div className="App">
      <header>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Aceul />} />
            <Route exact path='/TablePage' element={<TablePage />} />
            <Route exact path='*' element={<Aceul />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
