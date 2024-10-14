import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../../components/Alert/Alert';

const Code = () => {
    const [code, setCode] = useState(new Array(6).fill(""));
    const [error, setError] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleChange = (element, index) => {
        const value = element.value;

        // Validar si solo se pueden ingresar números de 1 dígito
        if (/^[0-9]?$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            // Si el input no está vacío, mover el foco al siguiente campo
            if (value !== "" && element.nextSibling) {
                element.nextSibling.focus();
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Verificar que todos los campos estén llenos
        if (code.some(num => num === "")) {
            setError("Por favor, completa todos los campos.");
            setShowAlert(true);
        } else {
            setShowAlert(false);
            // Si todos los campos están llenos, proceder con la validación
            setError(''); // Limpiar el error
            // Aquí puedes agregar la lógica para manejar el código ingresado (enviar a una API, etc.)
            console.log("Código ingresado:", code.join(""));
            navigate('/login');
        }
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <div
            className="flex justify-center items-center h-screen"
            style={{
                backgroundImage: 'url("/register_back.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            
            <div className="w-full max-w-md">
            {showAlert && (
                    <Alert message={error} color="red" onClose={handleCloseAlert} />
                )}
                <form
                    onSubmit={handleSubmit} // Cambia aquí a handleSubmit
                    className="shadow-md rounded-xl px-16 pt-6 pb-8"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
                >
                    <h2 className="text-2xl font-bold mt-6 mb-12 text-center">Verificación por email</h2>


                    <div className="mb-4">
                        <p className='mb-4'>Hemos enviado un número de verificación a tu correo.</p>
                        <p className='mb-8'>Introduce el código en el recuadro inferior</p>
                    </div>
                    <div className="flex justify-center space-x-2">
                        {code.map((num, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={num}
                                onChange={(e) => handleChange(e.target, index)}
                                className="w-10 h-12 text-center border rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        ))}
                    </div>

                    <div className="flex justify-center mt-2">
                        <button
                            type="submit"
                            className="flex items-center px-16 py-2 rounded-xl bg-blue-800 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-xl text-white"
                        >
                            Confirmar Código
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Code;
