import React, { useState } from 'react';

// Importe a imagem correta (brasão fornecido)
import logoImg from '../../assets/images/DeMoaly-coat-of-arms.png';

const LoginCard = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aqui você faria a validação real ou chamada de API
    // Por enquanto, apenas chamamos a função de callback para redirecionar
    if (email && password) {
        console.log('Login tentado com:', email);
        onLogin();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="login-card">
      
      <h2 className="text-center text-primary-color mb-1">
        Sistema Integrado
      </h2>
      <p className="text-center text-secondary-color mb-4">
        Capítulo Liberdade Harmoniosa nº 387
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Usuário ou E-mail</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Senha</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        
        <button type="submit" className="btn btn-accent w-100 mt-3">
          ENTRAR
        </button>
      </form>

      <div className="text-center mt-3">
        <a href="#" className="forgot-password-link">Esqueceu sua senha?</a>
      </div>
    </div>
  );
};

export default LoginCard;