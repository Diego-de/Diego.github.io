import * as React from 'react';
import "../components/nav.css";
import { Link as LinkScroll } from 'react-scroll'
import Button from "@mui/material/Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const NavbarDevice = () => {
    return (
        <div className="perfDevice">

            <div className="opçoes">
                <li className='navbutton'><LinkScroll className="btn1" to="page1" spy={true} smooth={true} offset={50} duration={500} >BIOGRAFIA</LinkScroll></li>
                <li className='navbutton'><LinkScroll className="btn1" to="page2" spy={true} smooth={true} offset={50} duration={500} >EXPERIÊNCIAS</LinkScroll></li>
                <li className='navbutton'><LinkScroll className="btn1" to="page3" spy={true} smooth={true} offset={50} duration={500} >FORMAÇÃO</LinkScroll></li>
                <li className='navbutton'><LinkScroll className="btn1" to="page4" spy={true} smooth={true} offset={50} duration={500} >PORTIFÓLIO</LinkScroll></li>
            </div>

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
            </div>
        </div>

    );
}

export default NavbarDevice;