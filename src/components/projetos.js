import React from "react";
import styled from 'styled-components';

const ProjetosSection = styled.section`
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

    h1 {
        font-size: clamp(1.8em, 4vw, 2.5em);
        margin-bottom: 30px;
        font-weight: 700;
        background: linear-gradient(90deg, #fff, #e0e0e0);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 768px) {
        padding: 25px;
        margin: 20px auto;
    }
`;

const ProjetoCard = styled.div`
    padding: 20px;
    margin: 20px 0;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-3px);
    }

    h3 {
        font-size: clamp(1.2em, 3vw, 1.8em);
        margin-bottom: 15px;
        color: #e0e0e0;
    }

    p {
        font-size: clamp(1em, 2vw, 1.2em);
        line-height: 1.8;
        color: #e0e0e0;
        max-width: 600px;
        margin: 0 auto;
        opacity: 0.9;
    }
`;

const Projetos = () => {
    return (
        <ProjetosSection id="projetos">
            <h1>Projetos</h1>
            <ProjetoCard>
                <h3>Projeto 1</h3>
                <p>Descrição do projeto 1</p>
            </ProjetoCard>
        </ProjetosSection>
    );
};

export default Projetos;