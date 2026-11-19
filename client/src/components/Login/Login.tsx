import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: login,
          password: password
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Udane logowanie!");
        navigate('/cart');
      } else {
        setError(data.message || 'Nieprawidłowy email lub hasło');
      }
    } catch (err) {
      setError('Błąd połączenia z serwerem');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Logowanie</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="email"
        placeholder="email"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Zaloguj się</button>
    </form>
  );
};
