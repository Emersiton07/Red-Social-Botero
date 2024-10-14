import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Verifica si el email y la contraseña son correctos (solo para ejemplo)
    if (email === 'a@a' && password === '1') {
      // Simula un inicio de sesión exitoso
      navigate('/');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: 'url("/login_back.jpg")', // Reemplaza por tu URL de imagen
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full max-w-md">
        <form
          onSubmit={handleLogin}
          className="shadow-md rounded-xl px-16 pt-6 pb-8"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
        >
          <h2 className="text-2xl font-bold mt-6 mb-12 text-center">Iniciar Sesión</h2>

          {error && (
            <p className="text-red-500 text-xs italic mb-4">{error}</p>
          )}

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa tu correo"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="********"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="flex items-center px-16 py-2 rounded-xl bg-stone-950 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-xl text-white"
            >
              Ingresar
            </button>
          </div>

          <div className='flex justify-around my-10 mx-6'>
            <h4>No Tienes una cuenta?</h4>
            <Link to="/registrarse" className="text-blue-700">
              Registrarse
            </Link>

          </div>

          <button
            className="flex items-center justify-center w-full py-2 rounded-xl bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-xl"
          >
            <img src="/google.svg" alt="Google Icon" className="size-8 mr-2" />
            Iniciar con Google
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;
