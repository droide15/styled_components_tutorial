import styled from 'styled-components';

export const BasicInput = () => {
    return (
        <StyledBasicInput type="text" placeholder="Enter Value" />
    )
}


const StyledBasicInput = styled.input`
    font-size: 1rem;
    padding: 0.5rem;
    margin: 1rem;
`;
