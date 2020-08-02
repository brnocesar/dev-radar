import styled from 'styled-components';

const Button = styled.button`
    color: var(--laranjaRosado);
    border: 1px solid var(--laranjaRosado);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .7s;
    &:hover,
    &:focus {
        opacity: .9;
        background-color: var(--laranjaRosado);
        color: var(--azulEscuro);
        border: 1px solid var(--laranjaRosado);
        transition: 0.5s;
    }

    @media (max-width: 800px) {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        color: var(--azulEscuro);
        background: var(--laranjaRosado);
        border-top: 2px solid var(--azulEscuro);
        border-radius: 0;
        text-align: center;
}
`;

export default Button;
