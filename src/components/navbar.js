import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import MenuList from '@mui/material/MenuList';
import {
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";

import { Link as LinkScroll } from 'react-scroll'
import "../components/nav.css";
import perfil from "./../assets/foto.svg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import Button from "@mui/material/Button";

//

const Navbar = () => {
    return (
        <Grid
            container
            position={'fixed'}
            xs={2}
            justifyContent="flex-start"
            alignItems="center"
            sx={{ height: "100%" }}
            zIndex={1}
        >
            <div style={{ backgroundColor: "#1C0B2B", color: "#FFFFFF", height: "100%", width: "100vh" }}>
                <Toolbar sx={{ justifyContent: 'center' }}>
                    <MenuList>
                        <div className="perf" >
                            <MenuList >
                                <CardMedia component="img" sx={{ pt: "10%", borderRadius: "50%" }} image={perfil}/>
                                <Typography align="center">Diego Gomes de souza</Typography>
                            </MenuList>
                        </div>
                        <div className="perf">
                            <MenuList>
                                <div className='navbutton'><LinkScroll className="btn1" to="page1" spy={true} smooth={true} offset={50} duration={500} >BIOGRAFIA</LinkScroll></div>
                                <div className='navbutton'><LinkScroll className="btn1" to="page2" spy={true} smooth={true} offset={50} duration={500} >EXPERIÊNCIAS</LinkScroll></div>
                                <div className='navbutton'><LinkScroll className="btn1" to="page3" spy={true} smooth={true} offset={50} duration={500} >FORMAÇÃO</LinkScroll></div>

                            </MenuList>
                        </div>
                        <div className="perfbutt" >
                                <Button href='https://github.com/Diego-de' id='perf1' target="_blank">
                                    <GitHubIcon sx={{ fontSize: 100, color: "white" }} />
                                </Button>

                                <Button href='https://www.linkedin.com/in/diego-gomes-55240b135' id='perf1' target="_blank">
                                    <LinkedInIcon sx={{ fontSize: 100, color: "white" }} />
                                </Button>  
                        </div>
                    </MenuList>
                </Toolbar>
            </div>
        </Grid>
    );
}

export default Navbar;