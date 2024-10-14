import React from 'react';

const Alert = ({ message, color = 'blue', onClose }) => {
    const colors = {
        blue: {
            text: 'text-blue-800',
            background: 'bg-blue-50',
            border: 'border-blue-300',
            dismissColor: 'text-blue-500',
            hover: 'hover:bg-blue-200',
        },
        red: {
            text: 'text-red-800',
            background: 'bg-red-50',
            border: 'border-red-300',
            dismissColor: 'text-red-500',
            hover: 'hover:bg-red-200',
        },
        // Puedes agregar más colores aquí
    };

    return (
        <div
            className={`absolute top-4 right-4 flex items-center p-4 mb-4 ${colors[color].text} border-t-4 ${colors[color].border} ${colors[color].background}`}
            role="alert"
        >
            <svg
                className="flex-shrink-0 w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="ml-3">{message}</span>
            <button
                type="button"
                className={`ms-auto -mx-1.5 -my-1.5 ${colors[color].background} ${colors[color].dismissColor} rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 ${colors[color].hover} inline-flex items-center justify-center h-8 w-8`}
                onClick={onClose}
                aria-label="Close"
            >
                <span className="sr-only">Dismiss</span>
                <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                </svg>
            </button>
            
        </div>
    );
};

export default Alert;
