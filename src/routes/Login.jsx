import React, { useState } from 'react';
import '../styles/LoginStyled.css';
import usuarios from '../../usuario'; // nosso "banco fake"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioEncontrado = usuarios.find(
      (u) => u.email === email && u.senha === senha
    );

    if (usuarioEncontrado) {
      localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
      alert('Login realizado com sucesso!');
      navigate('/'); // Redireciona para uma rota protegida
    } else {
      alert('Email ou senha incorretos.');
    }
  };

  return (
    <div>
      <form className='contato' onSubmit={handleSubmit}>
        <h3>Login</h3> <br /><br />
        
        <p>Email</p>
        <input
          className='email'
          type="email"
          placeholder='seuemail@aqui.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <p>Senha</p>
        <input
          className='assunto'
          type="password"
          placeholder='Digite sua senha'
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
