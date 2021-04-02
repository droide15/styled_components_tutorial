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
    background: red;
    transition: all 2s ease-in-out;
    h1 {
        color: blue;
    }
    .subtitle {
        color: green;
    }
    &:hover {
        background: black;
    }
`;

export default Header;