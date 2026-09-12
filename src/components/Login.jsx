import React, { useState } from 'react';

function Login() {
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
console.log('Dados enviados:', { email, senha });
};

return (
<div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
<h2>Login</h2>
<form onSubmit={handleSubmit}>
<div style={{ marginBottom: '10px' }}>
<label>E-mail:</label>
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
style={{ width: '100%', padding: '8px', marginTop: '5px' }}
required
/>
</div>
<div style={{ marginBottom: '10px' }}>
<label>Senha:</label>
<input
type="password"
value={senha}
onChange={(e) => setSenha(e.target.value)}
style={{ width: '100%', padding: '8px', marginTop: '5px' }}
required
/>
</div>
<button type="submit" style={{ padding: '10px 15px', cursor: 'pointer' }}>
Entrar
</button>
</form>
</div>
  );
}

export default Login;
