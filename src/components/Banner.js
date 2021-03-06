import React from 'react';
import styled from 'styled-components';

const Banner = ({title, children}) => {
    return (
        <BannerWrapper>
            <h1>{title}</h1>
            {children}
        </BannerWrapper>
    );
}

const BannerWrapper = styled.div`
    color: white;
    font-size: 12px;
    text-transform: uppercase;
    h1:hover {
        color: red;
    }
`;

export default Banner;