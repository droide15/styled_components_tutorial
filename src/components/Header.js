import React from 'react';
import styled from 'styled-components';

export const Header = ({title}) => {
    return (
        <StyledWrapper>
            <h1>{title}</h1>
            <h2 className="subtitle">learning styled components</h2>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.section`
    background: ${(props) => props.theme.primaryColor};
    transition: all 0.2s ease-in-out;
    h1 {
        color: ${(props) => props.theme.secondaryColor};
        padding: 0.5rem;
    }
    .subtitle {
        color: ${(props) => props.theme.secondaryColor};
        filter: brightness(25%);
        padding: 0.5rem;
    }
    &:hover {
        background: ${(props) => props.theme.invertedColor};
    }
    padding: 0.5rem;
    text-transform: capitalize;
`;

export default Header;