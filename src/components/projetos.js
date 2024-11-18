import React from 'react';
import styled from 'styled-components';
import calculadora_imc from '../assets/calculadora_imc.png';
import em_breve from '../assets/em_breve.png';

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
      transform: translateY(-5px);
    }

    .descricao {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(40, 40, 40, 0.7);
      color: #fff;
      text-align: center;
      padding: 10px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover .descricao {
      opacity: 1;
    }
  }
`;

const listaProjetos = [
  {
    id: 1,
    nome: "Calculadora de IMC",
    imagem: calculadora_imc,
    link: "https://icarofurlaneto.github.io/calculadora-imc/",
    descricao: "Clique aqui",
  },
  {
    id: 2,
    nome: "Em breve",
    imagem: em_breve,
  },
  {
  id: 3,
  nome: "Em breve",
  imagem: em_breve,
},
{
id: 4,
nome: "Em breve",
imagem: em_breve,
}
];

const Instrucao = styled.p`
  text-align: center;
  font-size: 14px; // Reduz o tamanho da fonte
  color: #aaa; // Usa uma cor mais clara
  margin-bottom: 15px;
`;

const Projetos = () => {
  return (
    <ProjetosSection id="projetos">
      <h2>Projetos</h2>
      <ImagensContainer>
        {listaProjetos.map((projeto) => (
          <div key={projeto.id} className="projeto">
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
              <img src={projeto.imagem} alt={projeto.nome} />
              <div className="descricao">{projeto.descricao}</div>
            </a>
          </div>
        ))}
      </ImagensContainer>
      <Instrucao>(Clique na imagem para acessar a aplicação desejada)</Instrucao>
    </ProjetosSection>
  );
};

export default Projetos;