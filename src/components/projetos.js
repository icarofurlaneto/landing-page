import React from "react";
import styled from 'styled-components';

const ProjetosSection = styled.section`
    padding: 20px;
    background-color: #e2e2e2;
    text-align: center;
`;

const Projetos = () => {
    return (
        <ProjetosSection>
            <h1>Projetos</h1>
            <div className="projeto">
                <h3>Calculadora de IMC</h3>
                <p>Calculadora de IMC é uma aplicação web desenvolvida com React que permite calcular o Índice de Massa
                    Corporal (IMC) com facilidade. Além do cálculo, a aplicação fornece classificações e feedback visual
                    baseado no resultado.</p>
            </div>
        </ProjetosSection>
    );
};

export default Projetos;