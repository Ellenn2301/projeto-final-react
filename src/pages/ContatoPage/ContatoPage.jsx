import React, { useState } from "react";
import './ContatoPage.css';

const ContatoPage = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');

    // faz mudar o estado inicial
    function handleChangeNome(event) {
        setNome(event.target.value); // usa sempre o segundo nome que setamos a cima.
    }

    function handleChangeEmail(event) {
        setEmail(event.target.value);
    }

    function handleChangeAssunto(event) {
        setAssunto(event.target.value);
    }

    function handleChangeMensagem(event) {
        setMensagem(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const componentes = {
            nome: nome,
            email: email,
            assunto: assunto,
            mensagem: mensagem,  
        };


        setNome('');
        setEmail('');
        setAssunto('');
        setMensagem('');
    }

    return (
        <>
            <div className="containerContato ">
                <header className="inicioContato">
                    <h3 className="tituloContato">
                        Entre em contato
                    </h3>
                    <img className="imagemContato" src="/imagens/contatoImg.svg" alt="Mapa mundi com pontos de conexão em vários locais." />
                </header>
            </div>

            <div className="containerForms">
                <form onSubmit={handleSubmit} className="formsContato">

                    <label>Nome:</label>
                    <input
                        type="text"
                        className="nomeForm"
                        placeholder="Digite o seu nome"
                        onChange={handleChangeNome}
                        value={nome}
                    />

                    <label>E-mail:</label>
                    <input
                        type="email"
                        className="emailForm"
                        placeholder="Digite o seu email"
                        onChange={handleChangeEmail}
                        value={email}
                    />

                    <label>Assunto:</label>
                    <input
                        type="text"
                        className="assuntoForm"
                        placeholder="Digite o assunto"
                        onChange={handleChangeAssunto}
                        value={assunto}
                    />

                    <label>Mensagem:</label>
                    <textarea
                        type="mensagem"
                        className="mensagemForm"
                        placeholder="Digite sua mensagem"
                        onChange={handleChangeMensagem}
                        value={mensagem}
                    />
                    <br></br>
                    <button className="buttonForm" type="submit">Enviar</button>
                </form>
            </div>

        </>
    );
};

export default ContatoPage;