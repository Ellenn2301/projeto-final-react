import React from "react";
import './SobrePage.css';

const SobrePage = () => {
    return(
        <>
        <div className="containerImg">
                <h2 className="tituloSobre">Ellen Cristina</h2>
                <img src="./imagens/ellenk.png" className="imgDescricao" alt="Imagem de Ellen Cristina com palavras que a descrevem." />
        </div>

        <main>
            <section className="containerApresentacao">
                <div className="descricaoDescontraida">
                    <p >
                        Olá! Sou uma pernambucana arretada, amante dos livros e motivada pelo conhecimento. Tenho 25 anos e sou apaixonada por gatos, *tenho duas rainhas*. 
                        Gosto de desafios, de me manter em constante aprendizado e em movimento. Estou sempre ouvindo música, e as vezes envolvida com a podosfera. 
                        Também amo o silêncio e ambientes tranquilos, adoro visitar espaços culturais e experimentar as delícias culinárias, especialmente doces.
                    </p>
                </div>

                <div className="palavrasDescritivas">
                        <h3 className="subtitulo">Interesses</h3>
                        <ul>
                            <li className="liInteresses">Gatos</li><br></br>
                            <li className="liInteresses">Pesquisa científica</li><br></br>
                            <li className="liInteresses">Pesquisa histórica</li><br></br>
                            <li className="liInteresses">Análise de dados</li><br></br>
                            <li className="liInteresses">Chocolate</li><br></br>
                            <li className="liInteresses">Projetos educacionais</li>
                        </ul>
                </div>
            </section>

            <section className="containerPretalab">
                <div>
                    <h3 className="subtitulo">Pretalab</h3>
                    
                    <div className="descricaoCurso"> 
                            <p className="paragrafoDescricao">
                                Conhecer e fazer parte da Pretalab foi uma experiência única, marcada por inovação e acolhimento. Iniciei por curiosidade e interesse em aperfeiçoar e crescer profissionalmente,
                                e sem dúvidas foi um grande desafio. Para além dos conhecimentos técnicos adquiridos, aprendi e refleti sobre minha posição em um mercado de trabalho cada vez mais feroz e desigual,
                                a importância do conhecimento e do papel transformador que a educação é capaz de impulsionar, da negritude que me marca e da sociedade coletiva a qual faço parte.
                                Com relação aos conteúdos de programação, inicieei como se estivesse em uma aula de falantes fluentes em latim, e conclui feliz da vida, por saber que eu consegui aprender o básico 
                                da programação em Front-end, e é só o início, codando caminhos possíveis!
                            </p>

                            <div>
                                <img src="./imagens/tecnologias.png" className="imgTecnologias" alt="4 blocos que apresentam as tecnologias e os seus respectivos conteúdos aprendidos durante o curso."/>
                            </div>
                    </div>
                </div>               
            </section>

            <section className="containerProjetos">
                <div>
                    <h3 className="subtitulo secaoProjetos">Projetos desenvolvidos</h3>

                    <div className="projetos">
                        <a href="https://portfolio-ellen-459891.netlify.app/" target="_blank"> <img src="./imagens/portfolio.png" className="projetosImg" /> </a>
                        <img src="./imagens/site.png" className="projetosImg" />
                        <img src="./imagens/calculadora.png" className="projetosImg" />
                    </div>
                </div>
            </section>

        </main>
    
        </>
    )
};

export default SobrePage;