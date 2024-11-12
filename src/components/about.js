import React from "react";
import styled from "styled-components"

const AboutSection = styled.section`
    padding: 20px;
    background-color: #f4f4f4;
    text-align: center;
`;

const About = () => {
    return (
        <AboutSection>
            <h2>Sobre mim</h2>
            <p>Sou desenvolvedor Full-Stack, programador especialista em tecnologias de Front-End e Back-End</p>
        </AboutSection>
    );
};

export default About;