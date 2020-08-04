import React from 'react';
import styled from 'styled-components';
import logoReact from '../../assets/img/logo-react.png';

const ImageContainer = styled.div`
  text-align: center;
`;

const ImageHeader = styled.header`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: var(--laranjaRosadoClarinho);
`;

const ParagrafoMiudo = styled.p`
    font-size: .5em;
`;

const LoadingImage = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function StartingMachineOnHeroku() {
  return (
    <ImageContainer>
      <ImageHeader>
        <LoadingImage src={logoReact} alt="Imagem de carregamento" />
        <p>
          Aguarde enquanto a máquina do Heroku é ligada
        </p>
        <ParagrafoMiudo>
          Hospedagem gratuita tem dessas hehe
        </ParagrafoMiudo>
      </ImageHeader>
    </ImageContainer>
  );
}

export default StartingMachineOnHeroku;
