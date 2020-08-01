import styled from 'styled-components';

export const FooterBase = styled.footer`
    background: var(--brnoAzulEscuro);
    border-top: 2px solid var(--brnoLaranja);
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 24px;
    padding-bottom: 16px;
    color: var(--brnoLaranjaRosado);
    text-align: center;
    @media (max-width: 800px) {
        margin-bottom: 50px;
    }
`;
