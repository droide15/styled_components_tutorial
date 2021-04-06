import React from 'react';
import styled from 'styled-components';

const Navbar = ({children}) => {
    return (
        <NavbarWrapper>
            <h2>company name</h2>
            {children}
        </NavbarWrapper>
    )
}

const NavbarWrapper = styled.nav`
    background: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.secondaryColor};
    padding: 1rem;
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default Navbar;