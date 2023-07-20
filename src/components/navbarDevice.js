import * as React from 'react';
import "../components/nav.css";
import { Link as LinkScroll } from 'react-scroll'
import Button from "@mui/material/Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import cv from '../assets/cv.svg'
import DownloadCv from '../assets/diego.pdf'
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const NavbarDevice = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="perfDevice">
            <div className="opçoes">
                {showMenu && (
                    <div className='optList'>
                        <li className='navbutton'><LinkScroll className="btn1" to="page1" spy={true} smooth={true} offset={50} duration={500} >BIOGRAFIA</LinkScroll></li>
                        <li className='navbutton'><LinkScroll className="btn1" to="page2" spy={true} smooth={true} offset={50} duration={500} >EXPERIÊNCIAS</LinkScroll></li>
                        <li className='navbutton'><LinkScroll className="btn1" to="page3" spy={true} smooth={true} offset={50} duration={500} >FORMAÇÃO</LinkScroll></li>
                        <li className='navbutton'><LinkScroll className="btn1" to="page4" spy={true} smooth={true} offset={50} duration={500} >PORTIFÓLIO</LinkScroll></li>
                    </div>
                )}
            </div>


            <div className='device'>
                <div className="social">
                    <li>
                        <Button href='https://github.com/Diego-de' target="_blank">
                            <GitHubIcon sx={{ fontSize: 40, color: "white" }} />
                        </Button>
                    </li>
                    <li>
                        <Button href='https://www.linkedin.com/in/diego-gomes-55240b135' target="_blank">
                            <LinkedInIcon sx={{ fontSize: 40, color: "white" }} />
                        </Button>
                    </li>
                    <li>
                        <Button id='perf1' target="_blank" href={DownloadCv} download>
                            <img src={cv} style={{ width: '48px', height: '40px', backgroundColor: 'white', borderRadius: '15px' }} alt='Curriculo' ></img>
                        </Button>
                    </li>
                </div>
                <div className='hamb'>
                    <IconButton
                        className="menuButton"
                        onClick={() => setShowMenu(!showMenu)}
                        aria-label="menu"
                    >
                        <MenuIcon sx={{ fontSize: 40, color: 'white' }} />
                    </IconButton>
                </div>
            </div>
        </div>

    );
}

export default NavbarDevice;