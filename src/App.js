import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Dashboard from './Components/Dashboard_Components/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/Dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
