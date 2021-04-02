import styled from 'styled-components';

const color = '#f15025';
const padding = 'padding: 1rem';
const margin = 'margin: 1rem';
const border = (width = '3px') => {
    return `border: solid ${width} red`;
}

export const CommonButton = styled.button`
    ${padding};
    ${margin};
    text-transform: uppercase;
`;

export const Button = styled(CommonButton)`
    ${border('7px')};
    color: red;
    background: blue;
`;

export const SecondButton = styled(CommonButton)`
    ${border()};
    color: ${color};
    background: var(--primaryColor);
`;