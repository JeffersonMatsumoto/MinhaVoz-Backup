import React, { Component } from 'react';
import Logo from '../../assets/imagens/senai-logo.png'

class PainelAdm extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {/* ------------------------------ CONTAINER ------------------------------ */}
                <div style={{ height: '100%', margin: 0, display: 'flex', flexDirection: 'column' }}>

                    {/* ------------------------------ HEADER ------------------------------ */}
                    {/* <Cabecalho> */}
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'fixed', backgroundColor: 'white', width: '100%', zIndex: 2, padding: '.5%' }}>
                        <img src={Logo} style={{ width: '8%', height: '8%', marginLeft: '5%' }} alt='Logo SENAI' />
                        <div style={{ display: 'flex', justifyContent: "flex-end", width: '100%', marginRight: '5%' }}>
                            <a style={{ marginLeft: 'auto' }}>Bem vindo, <b>Administrador</b></a>
                            <a style={{ marginLeft: 'auto' }}>Sair</a>
                        </div>
                    </div>
                    {/* ------------------------------ FIM HEADER ------------------------------ */}

                    {/* ------------------------------ BODY ------------------------------ */}
                    <div style={{ position: 'relative', zIndex: 1, overflow: 'auto', flex: 1, height: '100%', display: 'block' }}>

                        <h1 style={{ textAlign: 'center' }}>Painel Administrativo</h1>

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
                                gridTemplateAreas: `'chamado chamado' 'nome email' 'telefone assunto ' 'titulo titulo' 'mensagem mensagem' 'status status'`,
                                margin: '0 10% 0 10%',
                                border: '1px solid black'
                            }}>

                                <h2 style={{ gridArea: 'chamado', textAlign: 'center' }}>Chamado #{this.state.idChamado}</h2>
                                <p style={{ gridArea: 'nome', padding: '1%' }}>Nome: {this.state.nome}</p>
                                <p style={{ gridArea: 'email', padding: '1%' }}>Email: {this.state.email}</p>
                                <p style={{ gridArea: 'telefone', padding: '1%' }}>Telefone: {this.state.telefone}</p>
                                <p style={{ gridArea: 'assunto', padding: '1%' }}>Assunto: {this.state.assunto}</p>
                                <p style={{ gridArea: 'titulo', padding: '1%' }}>Título: {this.state.titulo}</p>
                                <p style={{ gridArea: 'mensagem', padding: '1%' }}>Mensagem: {this.state.mensagem}</p>
                                <div style={{ gridArea: 'status', padding: '1%', margin: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <p style={{ padding: '5%', border: '1px solid black' }}>Status</p>
                                    <div style={{ padding: '5%', border: '1px solid black' }}>
                                        {/* {this.verificaStatus()} */}Pendente
                                    </div>
                                </div>
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