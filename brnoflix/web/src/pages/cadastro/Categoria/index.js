import React from 'react';
import { Link } from 'react-router-dom';
import BaseTemplate from '../../../components/BaseTemplate';

function CadastroCategoria() {
    return (
        <BaseTemplate>

            <h1>Cadastro de Categoria</h1>

            <form>
                <label>
                    Nome da Categoria:
                    <input type="text" />
                </label>

                <button>
                    Cadastrar
                </button>
            </form>

            <Link to="/">
                Ir para Home
            </Link>
            
        </BaseTemplate>
    );
}

export default CadastroCategoria;