import * as React from 'react';
import './page.css';
import Geral from '../assets/Geral.svg'
import Ling from '../assets/lingua.svg'
import Soft from '../assets/soft.svg'
import ferr from '../assets/Ferramenta.svg'
import "aos/dist/aos.css"
import Aos from 'aos';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Portfolio from './Portifolio'


import { Container } from 'react-bootstrap';

const Page = () => {

    useEffect(() => {
        Aos.init({});
    }, []);


    const GeralList = ['Front-End', 'Back-End', 'Desenvolvimento Web', 'Metodologia Ageis', 'Git e Github']

    const listGeral = GeralList.map((GeralList) => {
        return <li>{GeralList}</li>;
    });


    const Linguagem = ['Java', 'JavaScript', 'Python', 'Html/Css', 'Sql']

    const listLing = Linguagem.map((Linguagem) => {
        return <li>{Linguagem}</li>;
    });

    const softSkill = ['Comunicativo', 'Trabalho em equipe.', 'Bom gerenciamento de tempo.', 'Sempre aberto a novas ferramentas linguagens.']

    const listSoft = softSkill.map((softSkill) => {
        return <li>{softSkill}</li>;
    });

    const Ferramenta = ['React', 'UI kits ', 'Spring Boot', 'Vscode']

    const listFerr = Ferramenta.map((Ferramenta) => {
        return <li>{Ferramenta}</li>;
    });







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
                    <div>
                        <h1>Experiencia</h1>

                        <div data-aos="fade-right" Class='exp'>
                            <ul>{listGeral}</ul>
                            <img src={Geral}></img>
                        </div>

                        <div data-aos="fade-left" Class='exp'>
                            <img src={Ling}></img>
                            <ul>{listLing}</ul>
                        </div>

                        <div data-aos="fade-right" Class='exp'>
                            <ul>{listFerr}</ul>
                            <img src={ferr}></img>
                        </div>

                        <div data-aos="fade-left" Class='exp'>
                            <img src={Soft}></img>
                            <ul>{listSoft}</ul>
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
                                    <a
                                        href={item.Link} target='_blank'
                                    >
                                        <button className='btnPort2'>
                                            Códigos
                                        </button>
                                    </a></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Page;