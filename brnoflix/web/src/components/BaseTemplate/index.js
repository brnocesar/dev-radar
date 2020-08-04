import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--azulEscuro);
    color: var(--laranjaRosado);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    ${({ paddingAll }) => css`
      padding: ${paddingAll}
    `}
`;

function BaseTemplate({ children, paddingAll }) {
  return (
    <>
      <Menu />

      <Main paddingAll={paddingAll}>
        {children}
      </Main>

      <Footer />
    </>
  );
}

BaseTemplate.defaultProps = {
  paddingAll: '',
};

BaseTemplate.propTypes = {
  // children: PropTypes.element.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  paddingAll: PropTypes.string,
};

export default BaseTemplate;
