import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import BaseTemplate from '../../../components/BaseTemplate';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import categoriesRepository from '../../../repositories/categories';
import videosRepository from '../../../repositories/videos';

function VideoRegistration() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryNames = categories.map(({ name }) => name);
  const { values, handleChange } = useForm({
    title: '',
    url: '',
    category: '',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((response) => {
        setCategories(response);
      });
  }, []);

  return (
    <BaseTemplate>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>

      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const selectedCategory = categories.find((category) => category.name === values.category);

        videosRepository.create({
          title: values.title,
          url: values.url,
          categoryId: selectedCategory.id,
        })
          .then(() => {
            // apresenta uma tela, modal, algo do tipo... "Vídeo cadastrado com sucesso!"
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
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryNames}
        />

        <Button>
          Cadastrar Vídeo
        </Button>
      </form>

    </BaseTemplate>
  );
}

export default VideoRegistration;
