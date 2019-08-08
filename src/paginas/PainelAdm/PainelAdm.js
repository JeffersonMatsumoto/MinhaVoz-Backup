import React, { Component } from 'react';
import Logo from '../../assets/imagens/senai-logo.png'
import Axios from 'axios';

class PainelAdm extends Component {
    constructor() {
        super();
        this.state = {
            chamado: [],
            id: '',
            nome: '',
            email: '',
            telefone: '',
            titulo: '',
            assunto: '',
            descricao: '',
            status: '',
            data: '',
            qtdChamado: '',
            listaChamados: []
        }
    }
    

    Sair(event) {
        event.preventDefault();
        localStorage.removeItem("usuario");
        this.props.history.push("/");
    }

    componentDidMount() {
        this.listarChamados();
    }

    listarChamados() {

        Axios.get("http://192.168.4.32:5000/listar",
            {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': "Bearer " + localStorage.getItem("usuario")
                }
            })
            .then((response) => {
                console.log(response);
                const qtdChamado = response.data.length;
                response = this.setState({ listaChamados: response.data, qtdChamado })
                // console.log(qtdChamado);
            })
            .catch((erro) => console.log(erro))
    }
     
    // verificaStatus = (chamado) => {
    //     // if (chamado.status === "Atendido") {
    //     //     return (
    //     //         <div>
    //     //             <div style={{ backgroundColor: 'green' }}>
    //     //                 {chamado.status}
    //     //             </div>
    //     //         </div>
    //     //     );
    //     // } else 
    //     // if (chamado.status === "Em Análise") {
    //     //     var cor = 'yellow';
    //     //     return(cor); 
    //     //     // return (

    //     //     //     <div>
    //     //     //         <div style={{ backgroundColor: 'yellow' }}>
    //     //     //             {chamado.status}
    //     //     //         </div>
    //     //     //     </div>
    //     //     // );
    //     // } else {
    //     //     return (
    //     //         null
    //     //     );
    //     // }
    //     if(chamado.status === "Banana"){
    //         cor ="<p>TESTE DA BANANA</p>"
    //         return(cor);
    //     }
    // }

    qtdChamadoPendente(){
        this.qtdChamado.filter() 
    }

    render() {
        
        return (
            <div>
                {/* <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"/> */}
                {/* ------------------------------ CONTAINER ------------------------------ */}
                <div style={{ height: '100%', margin: 0, display: 'flex', flexDirection: 'column', fontFamily: 'Montserrat' }}>

                    {/* ------------------------------ HEADER ------------------------------ */}
                    {/* <Cabecalho> */}
                    <div style={{
                        display: 'flex', flexDirection: 'row', alignItems: 'center',
                        // position: 'fixed', 
                        borderBottom: '1px solid black', backgroundColor: 'white', width: '100%', zIndex: 2, paddingBottom: '.5%'
                    }}>
                        <img src={Logo} style={{ width: '8%', height: '8%', marginLeft: '5%' }} alt='Logo SENAI' />
                        <div style={{ display: 'flex', justifyContent: "flex-end", width: '100%', marginRight: '5%' }}>
                            <span style={{ marginLeft: 'auto', textDecoration: 'none', color: 'black' }}>Bem vindo, <b>Administrador</b></span>
                            <span onClick={this.Sair.bind(this)} style={{ marginLeft: 'auto', textDecoration: 'none', color: 'black' }}>Sair</span>
                        </div>
                    </div>
                    {/* ------------------------------ FIM HEADER ------------------------------ */}

                    {/* ------------------------------ BODY ------------------------------ */}
                    <div style={{ position: 'relative', zIndex: 1, overflow: 'auto', flex: 1, height: '100%', display: 'block' }}>

                        <p style={{ textAlign: 'start', marginInlineStart: '10%', marginBlockStart: '5%', fontWeight: 'bold', color: 'red', fontSize: '1em' }}>PAINEL ADMINISTRATIVO</p>
                        <p style={{ textAlign: 'start', marginInlineStart: '10%', fontWeight: 'bold', fontSize: '2em' }}> Chamados</p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%' }}>

                            <div style={{
                                display: 'flex', flexDirection: 'column',
                                // margin: 'auto',
                                marginLeft: '20%',
                                border: '1px solid black'
                            }}>
                                <h3 style={{ textAlign: 'center' }}>TOTAL DE CHAMADOS PENDENTES:</h3>
                                {/* Contador de chamados pendentes */}
                                <p style={{ textAlign: 'center', fontSize: '3em', margin: '0' }}>
                                    {/* {this.qtdChamadoPendente()} */}
                                </p>
                            </div>

                            <div style={{
                                display: 'flex', flexDirection: 'column',
                                // margin: 'auto', 
                                marginRight: '20%',
                                border: '1px solid black'
                            }}>
                                <h3 style={{ textAlign: 'center' }}>TOTAL DE CHAMADOS:</h3>
                                <p style={{ textAlign: 'center', fontSize: '3em', margin: '0' }}>{this.state.qtdChamado}</p>
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
                                        if ( chamado.status === "Em Análise" ){
                                        return (
                                            <div>
                                                <h2 style={{ gridArea: 'chamado', textAlign: 'center' }}><b>Chamado #  {chamado.id}</b></h2>
                                                <p style={{ gridArea: 'data', padding: '1%' }}><b>Data do chamado:</b>  {chamado.data.split("T")[0].split("-")[2]}/
                                                                                                                        {chamado.data.split("T")[0].split("-")[1]}/
                                                                                                                        {chamado.data.split("T")[0].split("-")[0]}</p>
                                                <p style={{ gridArea: 'nome', padding: '1%' }}><b>Nome:</b>                {chamado.nome}</p>
                                                <p style={{ gridArea: 'email', padding: '1%' }}><b>Email:</b>              {chamado.email}</p>
                                                <p style={{ gridArea: 'telefone', padding: '1%' }}><b>Telefone:</b>        {chamado.telefone}</p>
                                                <p style={{ gridArea: 'assunto', padding: '1%' }}><b>Assunto:</b>          {chamado.assunto}</p>
                                                <p style={{ gridArea: 'titulo', padding: '1%' }}><b>Título:</b>            {chamado.titulo}</p>
                                                <p style={{ gridArea: 'mensagem', padding: '1%' }}><b>Mensagem:</b>        {chamado.descricao}</p>
                                                <div style={{ gridArea: 'status', padding: '1%', margin: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <p style={{ padding: '5%', border: '1px solid black' }}><b>Status</b></p>
                                                    
                                                    <div style={{ padding: '5%', border: '1px solid black', color: 'orange', fontWeight: 'bolder' }}>
                                                
                                                    {chamado.status}
                                                        {/* {this.verificaStatus(chamado)}
                                                        {cor} */}
                                                    </div>
                                                </div>
                                            </div>
                                        );} else if (chamado.status === "Atendido") {
                                            return (
                                                <div>
                                                    <h2 style={{ gridArea: 'chamado', textAlign: 'center' }}><b>Chamado #  {chamado.id}</b></h2>
                                                    <p style={{ gridArea: 'data', padding: '1%' }}><b>Data do chamado:</b>  {chamado.data.split("T")[0].split("-")[2]}/
                                                                                                                            {chamado.data.split("T")[0].split("-")[1]}/
                                                                                                                            {chamado.data.split("T")[0].split("-")[0]}</p>
                                                    <p style={{ gridArea: 'nome', padding: '1%' }}><b>Nome:</b>                {chamado.nome}</p>
                                                    <p style={{ gridArea: 'email', padding: '1%' }}><b>Email:</b>              {chamado.email}</p>
                                                    <p style={{ gridArea: 'telefone', padding: '1%' }}><b>Telefone:</b>        {chamado.telefone}</p>
                                                    <p style={{ gridArea: 'assunto', padding: '1%' }}><b>Assunto:</b>          {chamado.assunto}</p>
                                                    <p style={{ gridArea: 'titulo', padding: '1%' }}><b>Título:</b>            {chamado.titulo}</p>
                                                    <p style={{ gridArea: 'mensagem', padding: '1%' }}><b>Mensagem:</b>        {chamado.descricao}</p>
                                                    <div style={{ gridArea: 'status', padding: '1%', margin: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                        <p style={{ padding: '5%', border: '1px solid black' }}><b>Status</b></p>
                                                        
                                                        <div style={{ padding: '5%', border: '1px solid black', color: 'green', fontWeight: 'bolder' }}>
                                                    
                                                        {chamado.status}
                                                            {/* {this.verificaStatus(chamado)}
                                                            {cor} */}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div>
                                                    <h2 style={{ gridArea: 'chamado', textAlign: 'center' }}><b>Chamado #  {chamado.id}</b></h2>
                                                    <p style={{ gridArea: 'data', padding: '1%' }}><b>Data do chamado:</b>  {chamado.data.split("T")[0].split("-")[2]}/
                                                                                                                            {chamado.data.split("T")[0].split("-")[1]}/
                                                                                                                            {chamado.data.split("T")[0].split("-")[0]}</p>
                                                    <p style={{ gridArea: 'nome', padding: '1%' }}><b>Nome:</b>                {chamado.nome}</p>
                                                    <p style={{ gridArea: 'email', padding: '1%' }}><b>Email:</b>              {chamado.email}</p>
                                                    <p style={{ gridArea: 'telefone', padding: '1%' }}><b>Telefone:</b>        {chamado.telefone}</p>
                                                    <p style={{ gridArea: 'assunto', padding: '1%' }}><b>Assunto:</b>          {chamado.assunto}</p>
                                                    <p style={{ gridArea: 'titulo', padding: '1%' }}><b>Título:</b>            {chamado.titulo}</p>
                                                    <p style={{ gridArea: 'mensagem', padding: '1%' }}><b>Mensagem:</b>        {chamado.descricao}</p>
                                                    <div style={{ gridArea: 'status', padding: '1%', margin: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                        <p style={{ padding: '5%', border: '1px solid black' }}><b>Status</b></p>
                                                        
                                                        <div style={{ padding: '5%', border: '1px solid black', color: 'lightblue', fontWeight: 'bolder' }}>
                                                    
                                                        {chamado.status}
                                                            {/* {this.verificaStatus(chamado)}
                                                            {cor} */}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
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