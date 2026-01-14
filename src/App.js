import logo from './logo.svg';
import './App.css';
import Forms from './Forms';
import './Form.css';
import ShowInformation from './ShowInformation';
import {ContextData} from './Context/ContextForms';
import {HashRouter,Route, Routes} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <HashRouter>
      <ContextData>
          <Routes>
                    <Route path="/" element={<Forms />} />
                    <Route path="/info" element={<ShowInformation />} />
                    
            </Routes>
      </ContextData>
      </HashRouter>
      
      

    </div>
  );
}

export default App;
