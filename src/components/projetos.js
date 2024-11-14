import React from 'react';
import styled from 'styled-components';
import screenshot from '../assets/screenshot.png';

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

  h2 {
    font-size: clamp(1.8em, 4vw, 2.5em);
    margin-bottom: 30px;
    font-weight: 700;
    background: linear-gradient(90deg, #fff, #e0e0e0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ImagensContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;

  .projeto {
    position: relative;
    overflow: hidden;
    border-radius: 10px;

    img {
      width: 100%;
      aspect-ratio: 16 / 9;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }

    .descricao {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(40, 40, 40, 0.8);
      color: #fff;
      padding: 10px;
      text-align: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover .descricao {
      opacity: 1;
    }
  }
`;

const Projetos = () => {
  return (
    <ProjetosSection id="projetos">
      <h2>Projetos</h2>
      <ImagensContainer>
        <div className="projeto">
          <img src={screenshot} alt="Projeto 1" />
          <div className="descricao">Calculadora de IMC</div>
        </div>
      </ImagensContainer>
    </ProjetosSection>
  );
};

export default Projetos;