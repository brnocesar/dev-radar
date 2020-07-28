import styled from 'styled-components';


export const FooterBase = styled.footer`
    background: var(--brnoAzulEscuro);
    border-top: 2px solid var(--brnoLaranja);
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 32px;
    padding-bottom: 32px;
    color: var(--brnoLaranjaRosado);
    text-align: center;
    @media (max-width: 800px) {
        margin-bottom: 50px;
    }
`;
