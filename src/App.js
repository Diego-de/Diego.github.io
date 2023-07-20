
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/navbar';
import Page from './Page/Page'
import NavbarDevice from './components/navbarDevice';


function App() {
  return (
    <>
      <div className='home'>

        <div className='divisor'>
          <BrowserRouter>
            <div className='pag1'>
              <div className='tela1'>
                <Navbar />
              </div>
              <div className='menu-icon'>
                  <NavbarDevice />
              </div>
            </div>
            <div className='tela2'>
              <Page />
            </div>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
