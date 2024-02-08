import React from "react";
import styles from './home.module.css';

const HomePage = () => {
    return (
        <>
            <div>
                <header className={styles.containerBanner}>
                    <h2 className={styles.tituloBanner}>Projeto Final - Módulo React </h2> 
                    <img className={styles.meuBanner} src='/imagens/banner.svg' alt='Ilustração de uma mulher negra utilizando uma tela.' />
                </header>
            </div>

            <div>
                <section className={styles.containerMapaPessoal}>
                    <div>
                        <img className={styles.mapaEllen} src='/imagens/ellen.png' alt='Ellen Cristina: uma mulher negra, com cabelos castanhos e blusa cor de lilás'/>
                    </div> 

                    <div className={styles.descricaoPessoal}>
                        <h1 className={styles.nomeDescricao}>Ellen Cristina</h1>
                        <h3 className={styles.profissaoDescricao}>Estudante de Análise e Desenvolvimento de Sistemas</h3>
                        
                        <article>
                        <p className={styles.descricao}>
                            Como resultado de esforços coletivos, quem eu sou, durante toda a minha vida, esteve e está atravessado pela Educação. Sou formada em Ciências Sociais - licenciatura, profissão que exerço com alegria e luta. 
                            Atualmente tento conciliar os estudos para ingressar na Pós-Graduação, o meu trabalho como pesquisadora e estou descobrindo a programação: um campo novo, que se antes distante, agora faz parte do meu cotidiano, a partir do curso da PretaLab.
                            Estou iniciando no curso de ADS pelo Instituto Federal de Pernambuco. 
                        </p>
                        </article>   
                    </div>
                </section> 

                <section className={styles.containerSkills}>
                    <h3 className={styles.subtitulo}>Skills</h3>

                    <div className={styles.containerImagensSkills}>
                        <img src='imagens/github.png' className={styles.imgSkill} />
                        <img src='imagens/html.png' className={styles.imgSkill} />
                        <img src='imagens/css.png' className={styles.imgSkill} />
                        <img src='imagens/javascript.png' className={styles.imgSkill} />
                        <img src='imagens/react.png' className={styles.imgSkill} />
                    </div>

                    <div className={styles.containerContato}>
                        <h3 className={styles.subtitulo}>Contato</h3>

                        <div className={styles.listaContato}>
                            <ul>
                                <li>
                                    <a className={styles.redesSociais} href="https://www.linkedin.com/feed/" target="_blank">Linkedin</a>
                                </li>
                                
                                <li>
                                    <a className={styles.redesSociais} href="https://github.com/Ellenn2301" target="_blank">GitHub</a>
                                </li>

                                <li>
                                    <a className={styles.redesSociais}>E-mail: ellenncristina99@gmail.com</a>
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