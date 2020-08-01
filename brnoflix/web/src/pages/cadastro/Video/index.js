import React from 'react';
import { Link } from 'react-router-dom';
import BaseTemplate from '../../../components/BaseTemplate';

function CadastroVideo() {
  return (
    <BaseTemplate>

      <h1>Cadastro de Vídeos</h1>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>

    </BaseTemplate>
  );
}

export default CadastroVideo;
