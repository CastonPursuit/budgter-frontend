import './App.css';
import AddInfo from './pages/AddInfo';
import Details from './pages/Details';
import List from './pages/List';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<List/>} />
        <Route path='/add' element={<AddInfo/>} />
        <Route path='/details/:id' element={<Details/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
