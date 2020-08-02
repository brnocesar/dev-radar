import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import BaseTemplate from '../../../components/BaseTemplate';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function VideoRegistration() {
  const history = useHistory();
  const { values, handleChange } = useForm({
    title: '',
    url: '',
    categoryId: '',
  });

  return (
    <BaseTemplate>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>

      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        videosRepository.create({
          title: values.title,
          url: values.url,
          categoryId: 1, // testes
        })
          .then(() => {
            // apresenta uma tela, modal, algo do tipo... "Vídeo cadastrado com sucesso!"
            // console.log('=> values', values);
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          // type="select"
          name="categoryId"
          value={values.categoryId}
          onChange={handleChange}
        />

        <Button>
          Cadastrar Vídeo
        </Button>
      </form>

    </BaseTemplate>
  );
}

export default VideoRegistration;
