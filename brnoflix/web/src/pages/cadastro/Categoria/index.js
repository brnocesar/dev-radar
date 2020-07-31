import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BaseTemplate from '../../../components/BaseTemplate';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const initialValues = {
        name: '',
        description: '',
        color: '#cea69d'
    };

    const [categories, setCategories] = useState([]);
    const [values, setValues] = useState(initialValues);

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        });
    }

    function handleChange(event) {
        // const { getAttribute, value } = event.target
        setValue(
            // getAttribute('name'), 
            // value
            event.target.getAttribute('name'), 
            event.target.value
        );
    }


    return (
        <BaseTemplate>

            <h1>Cadastro de Categoria: {values.name}</h1>

            <form onSubmit={function handleSubmit(event) {
                event.preventDefault();
                setCategories([
                    ...categories,
                    values
                ]);
                setValues(initialValues);
            }}>
                <FormField 
                    label="Nome da Categoria"
                    type="text" 
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />
                
                <div>
                    <label>
                        Descrição:
                        <textarea 
                            type="text" 
                            name="description"
                            value={values.description}
                            onChange={handleChange}
                            />
                    </label>
                </div>

                <FormField 
                    label="Cor"
                    type="color" 
                    name="color"
                    value={values.color}
                    onChange={handleChange}
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categories.map((category, index) => {
                    return (
                        <li key={`${category.name}${index}`}>
                            {category.name}
                        </li>
                    );
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
            
        </BaseTemplate>
    );
}

export default CadastroCategoria;