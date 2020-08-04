import React from 'react';
import { FooterBase, ExtraLink, ParagrafoMiudo } from './styles';

function Footer() {
  return (

    <FooterBase>
      <p>
        {'Desenvolvido durante a '}
        <ExtraLink href="https://vitrine-imersao-react.vercel.app/">
          Imersão React
        </ExtraLink>
        {' da '}
        <a href="https://www.alura.com.br/">
          <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" height="19" alt="Logo Alura" />
        </a>
        {' por '}
        <ExtraLink href="https://brnocesar.github.io/">
          Bruno Cesar
        </ExtraLink>
        .
      </p>
      <ParagrafoMiudo>
        {'Acesse o '}
        <ExtraLink href="https://github.com/brnocesar/learning-react/tree/main/brnoflix">
          repositório
        </ExtraLink>
        {' do projeto.'}
      </ParagrafoMiudo>
    </FooterBase>
  );
}

export default Footer;
