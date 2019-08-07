import React, { Component } from 'react';
import Logo from '../../assets/imagens/senai-logo.png'
import Axios from 'axios';

class PainelAdm extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            nome: '',
            email: '',
            telefone: '',
            titulo: '',
            assunto: '',
            descricao: '',
            status: '',
            data: '',
            listaChamados: []
        }
    }

    componentDidMount() {
        this.listarChamados();
    }

    listarChamados() {

        Axios.get("http://localhost:5000/api/chamados",
            {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': "Bearer " + localStorage.getItem("usuario")
                }
            })
            .then((response) => {
                console.log(response);
                response = this.setState({ listaChamados: response.data })
            })
            .catch((erro) => console.log(erro))
    }

    render() {
        return (
            <div>
                {/* <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"/> */}
                {/* ------------------------------ CONTAINER ------------------------------ */}
                <div style={{ height: '100%', margin: 0, display: 'flex', flexDirection: 'column', fontFamily: 'Montserrat' }}>

                    {/* ------------------------------ HEADER ------------------------------ */}
                    {/* <Cabecalho> */}
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',
                        // position: 'fixed', 
                        borderBottom: '1px solid black' , backgroundColor: 'white', width: '100%', zIndex: 2, paddingBottom: '.5%' }}>
                        <img src={Logo} style={{ width: '8%', height: '8%', marginLeft: '5%' }} alt='Logo SENAI' />
                        <div style={{ display: 'flex', justifyContent: "flex-end", width: '100%', marginRight: '5%' }}>
                            <a href="/" style={{ marginLeft: 'auto', textDecoration: 'none', color: 'black' }}>Bem vindo, <b>Administrador</b></a>
                            <a href="/login" style={{ marginLeft: 'auto', textDecoration: 'none', color: 'black' }}>Sair</a>
                        </div>
                    </div>
                    {/* ------------------------------ FIM HEADER ------------------------------ */}

                    {/* ------------------------------ BODY ------------------------------ */}
                    <div style={{ position: 'relative', zIndex: 1, overflow: 'auto', flex: 1, height: '100%', display: 'block' }}>

                        <p style={{ textAlign: 'start', marginInlineStart: '10%', marginBlockStart: '5%' , fontWeight: 'bold', color: 'red', fontSize: '1em' }}>PAINEL ADMINISTRATIVO</p>
                        <p style={{ textAlign: 'start', marginInlineStart: '10%' , fontWeight: 'bold', fontSize: '2em' }}> Chamados</p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%' }}>

                            <div style={{
                                display: 'flex', flexDirection: 'column',
                                // margin: 'auto',
                                marginLeft: '20%',
                                border: '1px solid black'
                            }}>
                                <h3 style={{ textAlign: 'center' }}>TOTAL DE CHAMADOS PENDENTES:</h3>
                                {/* Contador de chamados pendentes */}
                                {/* <p>{this.state.status}</p>  */}
                            </div>

                            <div style={{
                                display: 'flex', flexDirection: 'column',
                                // margin: 'auto', 
                                marginRight: '20%',
                                border: '1px solid black'
                            }}>
                                <h3 style={{ textAlign: 'center' }}>TOTAL DE CHAMADOS:</h3>
                                {/* <p>{this.state.idChamado.Lenght()}</p> */}
                            </div>

                        </div>

                        <div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gridTemplateAreas: `'chamado data' 'nome email' 'telefone assunto ' 'titulo titulo' 'mensagem mensagem' 'status status'`,
                                margin: '0 10% 0 10%',
                                border: '1px solid black'
                            }}>
                                {
                                    this.state.listaChamados.map(function (chamado) {
                                        return (
                                            <div>
                                                <h2 style={{ gridArea: 'chamado', textAlign: 'center' }}>Chamado #  {chamado.id}</h2>
                                                <p style={{ gridArea: 'data', padding: '1%' }}>Data do chamado:     {chamado.data}</p>
                                                <p style={{ gridArea: 'nome', padding: '1%' }}>Nome:                {chamado.nome}</p>
                                                <p style={{ gridArea: 'email', padding: '1%' }}>Email:              {chamado.email}</p>
                                                <p style={{ gridArea: 'telefone', padding: '1%' }}>Telefone:        {chamado.telefone}</p>
                                                <p style={{ gridArea: 'assunto', padding: '1%' }}>Assunto:          {chamado.assunto}</p>
                                                <p style={{ gridArea: 'titulo', padding: '1%' }}>Título:            {chamado.titulo}</p>
                                                <p style={{ gridArea: 'mensagem', padding: '1%' }}>Mensagem:        {chamado.descricao}</p>
                                                <div style={{ gridArea: 'status', padding: '1%', margin: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <p style={{ padding: '5%', border: '1px solid black' }}>Status</p>
                                                    <div style={{ padding: '5%', border: '1px solid black' }}>
                                                        {/* {this.verificaStatus()} */}{chamado.status}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>

                        </div>
                    </div>
                    {/* ------------------------------ FIM BODY ------------------------------ */}
                </div>
                {/* ------------------------------ FIM CONTAINER ------------------------------ */}
            </div>
        );
    }
}

export default PainelAdm;