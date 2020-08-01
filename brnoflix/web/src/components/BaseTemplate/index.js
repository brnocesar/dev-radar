import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--brnoAzulEscuro);
    color: var(--brnoLaranjaRosado);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

function BaseTemplate({ children }) {
  return (
    <>
      <Menu />

      <Main>
        {children}
      </Main>

      <Footer />
    </>
  );
}

BaseTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default BaseTemplate;
