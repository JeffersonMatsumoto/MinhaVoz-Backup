import React, { Component } from 'react';
import Logo from '../../assets/imagens/senai-logo.png'

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

    render() {
        return (
            <div>
                <div style={{
                    position: 'relative',
                    height: '100vh'
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
                                marginTop: '5%',
                                padding: '25%',
                                borderRight: '1px solid black'
                                // borderRight: 'solid 1px'
                            }} />
                        <form style={{ display: 'flex', flexDirection: 'column', 
                            // margin: 'auto'
                            marginTop: '5%',
                            padding: '25%'
                             }}>
                            <h2 style={{ textAlign: 'center' }}>Login</h2>
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
                            />
                            <input
                                placeholder='Insira sua senha...'
                                type='password'
                                name='senha'
                                minLength='4'
                                autoFocuss
                                value={this.state.senha}
                                required
                                onChange={this.atualizarEstado}
                            />

                            <button
                                type='submit'
                                {...this.state.isLoading ? 'disabled' : ''}
                                >
                                {this.state.isLoading ? "Carregando..." : "Entrar"}
                            </button>
                            <p>{this.state.erroMensagem}</p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;