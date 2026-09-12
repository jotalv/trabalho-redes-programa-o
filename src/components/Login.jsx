import React, { useState } from 'react';

function Login() {
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
console.log('E-mail digitado:', email);
console.log('Senha digitada:', senha);
};
<div style={styles.container}></div>
return (
<div style={styles.container}>
<div style={styles.card}>
<h2 style={styles.title}>[ SISTEMA INFECTADO ]</h2>
<form onSubmit={handleSubmit}>
<div style={{ marginBottom: '15px' }}>
<label style={styles.label}>IDENTIFICAÇÃO (E-MAIL):</label>
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
style={styles.input}
placeholder="agente@antivirus.net"
required
/>
</div>
<div style={{ marginBottom: '15px' }}>
<label style={styles.label}>CHAVE DE ACESSO (SENHA):</label>
<input
type="password"
value={senha}
onChange={(e) => setSenha(e.target.value)}
style={styles.input}
placeholder="••••••••"
required
/>
</div>
<button type="submit" style={styles.button}>
INICIAR PURGAÇÃO
</button>
</form>
</div>
</div>
);
}
const styles = {
container: {
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
minHeight: '100vh',
backgroundColor: '#060408',
fontFamily: "'Courier New', Courier, monospace",
},
card: {
backgroundColor: '#0f0914',
padding: '30px',
borderRadius: '6px',
border: '1px solid #a855f7',
boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)',
width: '100%',
maxWidth: '380px',
boxSizing: 'border-box',
},
title: {
color: '#c084fc',
textAlign: 'center',
marginBottom: '20px',
fontSize: '20px',
letterSpacing: '2px',
textShadow: '0 0 5px rgba(192, 132, 252, 0.5)',
},
label: {
display: 'block',
color: '#a855f7',
fontSize: '12px',
marginBottom: '6px',
fontWeight: 'bold',
letterSpacing: '1px',
},
input: {
width: '100%',
padding: '10px',
backgroundColor: '#030205',
border: '1px solid #9333ea',
borderRadius: '4px',
color: '#e9d5ff',
fontSize: '14px',
outline: 'none',
boxSizing: 'border-box',
fontFamily: "'Courier New', Courier, monospace",
},
button: {
width: '100%',
padding: '12px',
backgroundColor: '#a855f7',
color: '#060408',
border: 'none',
borderRadius: '4px',
fontSize: '14px',
fontWeight: 'bold',
cursor: 'pointer',
marginTop: '10px',
fontFamily: "'Courier New', Courier, monospace",
boxShadow: '0 0 10px rgba(168, 85, 247, 0.4)',
},
};
export default Login;
