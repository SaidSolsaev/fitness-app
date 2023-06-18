import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './Pages/WelcomePage';

function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route exact path='/' element={<WelcomePage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
