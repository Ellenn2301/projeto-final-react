import React from "react";
import './HomePage.css';

const HomePage = () => {
    return (
        <>
            <div>
                <header className='containerBanner'>
                    <h2 className='tituloBanner'>Projeto Final - Módulo React </h2> 
                    <img className='meuBanner' src='/imagens/banner.svg' alt='Ilustração de uma mulher negra utilizando uma tela.' />
                </header>
            </div>

            <div>
                <section className='containerMapaPessoal'>
                    <div>
                        <img className='mapaEllen' src='/imagens/ellen.png' alt='Ellen Cristina: uma mulher negra, com cabelos castanhos e blusa cor de lilás'/>
                    </div> 

                    <div className='descricaoPessoal'>
                        <h1 className='nomeDescricao'>Ellen Cristina</h1>
                        <h3 className='profissaoDescricao'>Estudante de Análise e Desenvolvimento de Sistemas</h3>
                        
                        <article>
                        <p className='descricao'>
                            Como resultado de esforços coletivos, quem eu sou, durante toda a minha vida, esteve e está atravessado pela Educação. Sou formada em Ciências Sociais - licenciatura, profissão que exerço com alegria e luta. 
                            Atualmente tento conciliar os estudos para ingressar na Pós-Graduação, o meu trabalho como pesquisadora e estou descobrindo a programação: um campo novo, que se antes distante, agora faz parte do meu cotidiano, a partir do curso da PretaLab.
                            Estou iniciando no curso de ADS pelo Instituto Federal de Pernambuco. 
                        </p>
                        </article>   
                    </div>
                </section> 

                <section className='containerSkills'>
                    <h3 className='subtitulo'>Skills</h3>

                    <div className='containerImagensSkills'>
                        <img src='imagens/github.png' className='imgSkill'/>
                        <img src='imagens/html.png' className='imgSkill'/>
                        <img src='imagens/css.png' className='imgSkill'/>
                        <img src='imagens/javascript.png' className='imgSkill'/>
                        <img src='imagens/react.png' className='imgSkill'/>
                    </div>

                    <div className="containerContato">
                        <h3 className="subtitulo">Contato</h3>

                        <div className="listaContato">
                            <ul>
                                <li>
                                    <a className="redesSociais" href="https://www.linkedin.com/feed/" target="_blank">Linkedin</a>
                                </li>
                                
                                <li>
                                    <a className="redesSociais" href="https://github.com/Ellenn2301" target="_blank">GitHub</a>
                                </li>

                                <li>
                                    <a className="redesSociais">E-mail: ellenncristina99@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </section>
            </div>
            
            </>
    )
    
};

export default HomePage;