import styled from 'styled-components';

export const FooterBase = styled.footer`
    background: var(--laranja);
    border-top: 2px solid var(--azulEscuro);
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    color: var(--azulEscuro);
    text-align: center;
    @media (max-width: 800px) {
        margin-bottom: 50px;
    }
`;

export const ExtraLink = styled.a`
    font-weight: 700;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      color: var(--azulMaisEscuro);
    }
`;
