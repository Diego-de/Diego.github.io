
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/navbar';
import Page from './Page/Page'
import NavbarDevice from './components/navbarDevice';


function App() {
  return (
    <>
      <div className='home'>
        
        <div className='tela1'>
        <BrowserRouter> 
            <Navbar/>
          </BrowserRouter>
        </div>

        <div className='menu-icon'>
          <BrowserRouter>
            <NavbarDevice/>
          </BrowserRouter> 
        </div>

          <div className='tela2'>
          <BrowserRouter>
            <Page/>
          </BrowserRouter> 
          </div>
      </div>
    </>
  );
}

export default App;
