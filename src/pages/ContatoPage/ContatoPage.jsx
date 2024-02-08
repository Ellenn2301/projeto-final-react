import React, { useState } from "react";
import styles from './contato.module.css';

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
        setEmail(event.target.value); // o target é o elemento inteiro
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
            <div className={styles.containerContato}>
                <header className={styles.inicioContato}>
                    <h3 className={styles.tituloContato}>
                        Entre em contato
                    </h3>
                    <img className={styles.imagemContato} src="/imagens/contatoImg.svg" alt="Mapa mundi com pontos de conexão em vários locais." />
                </header>
            </div>

            <section className={styles.formContato}>
                 <div className={styles.containerForm}>
                    <form onSubmit={handleSubmit} >
                        <label>Nome</label>
                        <input
                            type="text"
                            className={styles.nomeForm}
                            placeholder="Digite o seu nome"
                            onChange={handleChangeNome}
                            value={nome}
                        />

                        <label>E-mail</label>
                        <input
                            type="email"
                            className={styles.emailForm}
                            placeholder="Digite o seu email"
                            onChange={handleChangeEmail}
                            value={email}
                        />

                        <label>Assunto</label>
                        <input
                            type="text"
                            className={styles.assuntoForm}
                            placeholder="Digite o assunto"
                            onChange={handleChangeAssunto}
                            value={assunto}
                        />

                        <label>Mensagem</label>
                        <textarea
                            type="mensagem"
                            className={styles.mensagemForm}
                            placeholder="Digite sua mensagem"
                            onChange={handleChangeMensagem}
                            value={mensagem}
                        />
                        <br></br>
                        <button className={styles.buttonForm} type="submit">Enviar</button>
                    </form>
                </div>                 
            </section>

        </>
    );
};

export default ContatoPage;