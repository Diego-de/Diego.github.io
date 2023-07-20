import * as React from 'react';
import './page.css';
import Geral from '../assets/Geral.svg'
import Ling from '../assets/lingua.svg'
import Soft from '../assets/soft.svg'
import ferr from '../assets/Ferramenta.svg'
import "aos/dist/aos.css"
import Aos from 'aos';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Portfolio from './Portifolio'


import { Container } from 'react-bootstrap';

const Page = () => {

    useEffect(() => {
        Aos.init({});
    }, []);


    const GeralList = ['Front-End', 'Back-End', 'Desenvolvimento Web', 'Metodologia Ágeis', 'Git e Github'];
    const Linguagem = ['Java', 'JavaScript', 'Python', 'HTML/CSS', 'SQL'];
    const softSkill = ['Comunicativo', 'Trabalho em equipe', 'Bom gerenciamento de tempo'];
    const Ferramenta = ['React', 'UI kits', 'Spring Boot', 'VSCode'];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
    };

    const carouselContent = [
        {
            title: 'Experiência Geral',
            list: GeralList,
            image: Geral
        },
        {
            title: 'Linguagens',
            list: Linguagem,
            image: Ling
        },
        {
            title: 'Ferramentas',
            list: Ferramenta,
            image: ferr
        },
        {
            title: 'Soft Skills',
            list: softSkill,
            image: Soft
        }
    ];

    const currentContent = carouselContent[currentIndex];

    const listItems = currentContent.list.map((item, index) => <li key={index}>{item}</li>);



    return (
        <Container>
            <div className='header'>
                <div className='page1'>
                    <div style={{ width: '70%', alignSelf: 'center' }}>
                        <h1>BIOGRAFIA</h1>
                        <p>
                            Atualmente sou recém formado no curso de Sistemas
                            para internet na Universidade Catolica de pernambuco,
                            onde desenvolvi experiencias e aprendizados cujo objetivo
                            foi me tornar um desenvolvedor web e mobile.
                        </p>
                        <p>
                            Este site tem o objetivo de mostrar alguns dos meus
                            aprendizados no mundo da programação web, de modo
                            onde eu possa me apresentar para possiveis contratantes
                        </p>
                    </div>
                </div>

                <div className='page2'>
                    <div className='carousel-container'>
                        <h1>{currentContent.title}</h1>

                        <div data-aos="fade-right" className='exp'>
                            <div className='ulE'>
                                <ul><li>{listItems}</li></ul>
                            </div>
                            <div className='imgE'>
                                <img src={currentContent.image} alt='image' />
                            </div>
                        </div>

                        <div className='btn'>
                            <button className='carousel-button' onClick={handlePrev}>&lt;</button>
                            <button className='carousel-button' onClick={handleNext}>&gt;</button>
                        </div>
                    </div>
                </div>


                <div className='page3'>
                    <div>
                        <h1>FORMAÇÃO</h1>
                        <Table hover responsive>
                            <thead  >
                                <tr>
                                    <th >#</th>
                                    <th>Onde</th>
                                    <th>Curso</th>
                                    <th>Ano Inicial</th>
                                    <th>Ano Final</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Universidade Cátolica de pernambuco</td>
                                    <td><a className='link' href='https://portal.unicap.br/w/sistemas-para-internet' target='_blank'>Sistemas Para Internet</a></td>
                                    <td>2020</td>
                                    <td>2022</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Udemy</td>
                                    <td><a className='link' href='https://www.udemy.com/course/desenvolva-aplicacoes-completas-com-spring-boot-e-react-js/' target='_blank'>React + Spring-Boot</a></td>
                                    <td>2021</td>
                                    <td>2021</td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>Youtube - Boson Treinamento</td>
                                    <td><a className='link' href='https://www.youtube.com/watch?v=Q_KTYFgvu1s&list=PLucm8g_ezqNoNHU8tjVeHmRGBFnjDIlxD' target='_blank'>Modelagem de Dados</a></td>
                                    <td>2021</td>
                                    <td>2021</td>
                                </tr>

                                <tr>
                                    <td>4</td>
                                    <td>Youtube - Curso em Video</td>
                                    <td><a className='link' href='https://www.youtube.com/watch?v=KlIL63MeyMY&list=PLHz_AreHm4dkqe2aR0tQK74m8SFe-aGsY' target='_blank'>Programação Orientada a Objetos</a></td>
                                    <td>2021</td>
                                    <td>2021</td>
                                </tr>
                            </tbody>
                        </Table>

                    </div>
                </div>

                <div className='page4'>
                    <h1>PORTIFÓLIO</h1>
                    <div className='port'>
                        {Portfolio.map((item) =>
                            <div className='card'>
                                <div><h5>{item.Title}</h5></div>
                                <div><img src={item.Image}></img></div>
                                <div className='btnPort'>
                                    <a href={item.Link} target='_blank' >
                                        <button className='btnPort2'> Códigos</button>
                                    </a>
                                    {item.Link2 &&(
                                    <a href={item.Link2} target='_blank' >
                                        <button className='btnPort2'>Site</button>
                                    </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Page;