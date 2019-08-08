import React, { Component } from 'react';
import Logo from '../../assets/imagens/senai-logo.png';
import Axios from 'axios';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            senha: '',
            erroMensagem: '',
            isLoading: false
        }
    }

    atualizarEstado = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    efetuarLogin = (event) => {
        event.preventDefault();
    
        Axios.post("http://192.168.4.32:5000/api/Login", {
          email: this.state.email,
          senha: this.state.senha
        })
        .then(data => {
          if (data.status === 200){
            localStorage.setItem("usuario", data.data.token);
            this.props.history.push('/painel');
          }
        }) 
        .catch(erro =>{
          this.setState({ isLoading: false });
          this.setState({ erroMensagem: 'Email e/ou senha incorretos' });
        })
      }

    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"/>
                <div style={{
                    position: 'relative',
                    // height: '100vh',
                    // overflow: 'hidden'
                    fontFamily: 'Montserrat'
                }}>
                    <div style={{
                        height: '100%',
                        display: 'grid',
                        margin: 'auto',
                        gridTemplateColumns: '50% 50%'
                    }}>
                        
                        <img src={Logo} alt='Logo SENAI'
                            style={{
                                // margin: 'auto'
                                marginTop: '10%',
                                padding: '23.2%',
                                borderRight: '1px solid black'
                            }}/>
                        <form onSubmit={this.efetuarLogin} style={{ display: 'flex', flexDirection: 'column', 
                            // margin: 'auto'
                            marginTop: '2%',
                            // padding: '25%'
                            paddingInlineEnd: '25%',
                            paddingInlineStart: '25%',
                            paddingTop: '25%'
                             }}>
                            <h2 style={{ textAlign: 'center', fontWeight: 'bolder' }}>LOGIN</h2>
                            
                            <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bolder' }}>E-mail
                                <input
                                    placeholder='Insira seu email...'
                                    type='email'
                                    name='email'
                                    autoComplete='on'
                                    maxlength='25'
                                    autoFocus
                                    value={this.state.email}
                                    required
                                    onChange={this.atualizarEstado}
                                    style={{ backgroundColor: '#f2f2f2', padding: '3%', margin: '1%', border: 'none' }}
                                />
                            </label>

                            <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bolder', marginTop: '5%', marginBottom: '5%'}}>Senha
                                <input
                                    placeholder='Insira sua senha...'
                                    type='password'
                                    name='senha'
                                    minLength='4'
                                    autoFocuss
                                    value={this.state.senha}
                                    required
                                    onChange={this.atualizarEstado}
                                    style={{ backgroundColor: '#f2f2f2', padding: '3%', margin: '1%', border: 'none' }}
                                />
                            </label>

                            <button
                                style= {{ backgroundColor: '#151515', color: '#FFF', width: '50%', marginInlineStart: 'auto', marginInlineEnd: 'auto', padding: '3%', fontFamily: 'Montserrat'}}
                                type='submit'
                                {...this.state.isLoading ? 'disabled' : ''}
                            >
                                {this.state.isLoading ? "Carregando..." : "ENTRAR"}
                            </button>
                            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{this.state.erroMensagem}</p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
//shift + a (+ZOOM)
//shift + z (-ZOOM)
export default Login;