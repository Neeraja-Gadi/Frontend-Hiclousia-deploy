import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroPage from './components/HomePage/HeroPage'
import Sec from './components/HomePage/Sec'
import Third from './components/HomePage/Third'
import Fourth from './components/HomePage/Fourth'
import Fifth from './components/HomePage/Fifth'

function App() {
  return (
    <div className="App">
      <h1>Hiclousia Frontend ,Hai</h1>
      

      <Router>
        <Routes>
          <Route path="/" element={<>
            {/* <SearchBar/>  */}
            <HeroPage />
            <Sec />
            <Third />
            <Fourth />
            <Fifth />
          </>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
