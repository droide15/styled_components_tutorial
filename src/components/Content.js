import React from 'react';
import styled from 'styled-components';

const Content = ({children, className}) => {
    return (
        <section className={className}>
            {children}
        </section>
    )
}

export default styled(Content)`
    text-transform: capitalize;
    padding: 2rem;
    background: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.primaryColor};
    @media (min-width: 1000px) {
        display: flex;
    }
`;