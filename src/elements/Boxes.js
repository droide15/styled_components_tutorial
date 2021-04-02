import styled, {css} from 'styled-components';
import {rotate} from './Animations';

const green = 'green';
const red = 'red';

const Box = css`
    margin: 1rem;
    display: inline-block;
    animation: ${rotate} 10s ease-in-out infinite;
`;

export const RedBox = styled.div`
    ${Box};
    background-color: ${green};
`;

export const GreenBox = styled.div`
    ${Box};
    background-color: ${red};
`;
