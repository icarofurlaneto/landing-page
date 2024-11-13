import React from "react";
import styled from "styled-components"

const AboutSection = styled.section`
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

    p {
        font-size: clamp(1em, 2vw, 1.2em);
        line-height: 1.8;
        color: #e0e0e0;
        max-width: 600px;
        margin: 0 auto;
        opacity: 0.9;
    }


    @media (max-width: 768px) {
        padding: 25px;
        margin: 20px auto;
    }
`;

const About = () => {
    return (
        <AboutSection id="sobre">
            <h2>Quem sou?</h2>
            <p>Desenvolvedor Full-Stack, estudante de Análise e Desenvolvimento de Sistemas na Universidade Tecnológica Federal do Paraná. Apaixonado por desenvolvimento e comprometido em criar soluções digitais eficazes e personalizadas para atender às suas necessidades.</p>
        </AboutSection>
    );
};

export default About;