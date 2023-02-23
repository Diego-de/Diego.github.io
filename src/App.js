
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Page from './Page/Page'


function App() {
  return (
    <>
      <div className='home'>

        <BrowserRouter> 
          <Navbar/>
        </BrowserRouter>

        <BrowserRouter>
          <Page/>
        </BrowserRouter> 

      </div>
    </>
  );
}

export default App;
