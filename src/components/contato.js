import React, { useState } from 'react';
import styled from 'styled-components';

const ContatoSection = styled.section`
    width: 90%;
    min-width: 320px;
    max-width: 800px;
    padding: 40px;
    margin: 40px auto;
    background: #282828;
    border-radius: 15px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }

    h2 {
        font-size: clamp(1.8em, 4vw, 2.5em);
        margin-bottom: 30px;
        font-weight: 700;
        background: linear-gradient(90deg, #fff, #e0e0e0);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 600px;
    margin: 0 auto;

    input, textarea {
        width: 100%;
        padding: 12px 16px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        color: #e0e0e0;
        font-size: 16px;
        transition: all 0.3s ease;

        &:focus {
            outline: none;
            border-color: rgba(255, 255, 255, 0.3);
            box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
        }

        &:hover {
            border-color: rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.07);
        }

        &::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }
    }

    textarea {
        min-height: 150px;
        resize: vertical;
    }

    button {
        padding: 12px 24px;
        background: #00ADB5;
        border: none;
        border-radius: 8px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            background: #00ADB5;
        }

        &:active {
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        gap: 15px;

        input, textarea, button {
            padding: 10px 14px;
            font-size: 14px;
        }
    }
`;

const Contato = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });

    const [status, setStatus] = useState('');

    const manipularInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const manipularSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://formspree.io/f/mjkvrllw", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
        });

        if (response.ok) {
            setStatus("Mensagem enviada com sucesso!");
            setFormData({ nome: '', email: '', mensagem: '' });
        } else {
            setStatus("Erro ao enviar mensagem. Tente novamente.");
        }
    } catch (error) {
        setStatus("Erro ao enviar mensagem. Tente novamente.");
    }
};

    return (
        <ContatoSection id="contato">
            <h2>Entre em contato comigo</h2>
            <StyledForm onSubmit={manipularSubmit}>
                <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={manipularInputChange}
                    placeholder="Seu Nome"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Seu E-mail"
                    value={formData.email}
                    onChange={manipularInputChange}
                    autoComplete="email"
                    required
                />
                <textarea
                    name="mensagem"
                    placeholder="Digite sua mensagem aqui"
                    value={formData.mensagem}
                    onChange={manipularInputChange}
                    required
                />
                <button type="submit">Enviar</button>
                {status && <p>{status}</p>}
            </StyledForm>
        </ContatoSection>
    );
};

export default Contato;