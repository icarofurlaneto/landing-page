import React, { useState } from 'react';
import styled from 'styled-components';

const ContatoSection = styled.section`
    padding: 20px;
    background-color: d3d3d3;
    text-align: center;
`;

const Contato = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });

    const manipularInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const manipularSubmit = (e) => {
        e.preventDefault();
        alert("Mensagem enviada!");
    }

    return (
        <ContatoSection>
            <h2>Entre em contato</h2>
            <form onSubmit={manipularSubmit}>
                <input
                    type="text"
                    name="nome"
                    valor={formData.name}
                    onChange={manipularInputChange}
                    placeholder="Nome"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={manipularInputChange}
                    required
                />
                <textarea
                    name="mensagem"
                    placeholder="Mensagem"
                    value={formData.mensagem}
                    onChange={manipularInputChange}
                    required
                />
                <button type="submit">Enviar</button>
            </form>
        </ContatoSection>
    );
};

export default Contato;