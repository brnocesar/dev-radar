import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BaseTemplate from '../../../components/BaseTemplate';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '#cea69d',
  };

  const { values, handleChange, clearForm } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const URL_CATEGORIES = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://brnoflix.herokuapp.com/categories';
    fetch(URL_CATEGORIES).then(async (response) => {
      const result = await response.json();
      setCategories([
        ...result,
      ]);
    });
  }, []);

  return (
    <BaseTemplate>

      <h1>
        Cadastro de Categoria:
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategories([
          ...categories,
          values,
        ]);

        clearForm();
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={`${category.name}`}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>

    </BaseTemplate>
  );
}

export default CadastroCategoria;
