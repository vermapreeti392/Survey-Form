import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Welcome from './components/Welcome';
import Survey from './components/Survey';
import Thanks from './components/Thanks';

function App() {  
  return (
    <BrowserRouter>
     <div className="App">  
    <Routes>
      <Route path='/' element= {<Welcome />} ></Route>
      <Route path='/survey' element= {<Survey/>} ></Route>
      <Route path='/thanks' element= {<Thanks/>} ></Route>
    </Routes>  
    </div>    
    </BrowserRouter>    
  );
}

export default App;
