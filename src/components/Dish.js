import styled from 'styled-components';
import {SecondButton} from 'elements/Buttons';

export const DishButton = styled(SecondButton)`
    background: green;
    color: white;
    margin: 0.5rem;
    text-transform: capitalize;
    font-size: ${props => props.size ? props.size : "12px"};
`;
