import './App.css';
import AddInfo from './pages/AddInfo';
import Details from './pages/Details';
import List from './pages/List';

function App() {
  return (
    <div className="App">
      {/* hey frontend for budget App */}
      <List/>
      <Details/>
      <AddInfo/>
    </div>
  );
}

export default App;
