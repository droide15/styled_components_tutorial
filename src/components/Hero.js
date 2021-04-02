import styled from 'styled-components';

const Hero = styled.div`
    min-height: 3vh;
    background-image: url(${props => props.img});
    margin: 1rem;
    padding: 0.5rem;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
`;

export default Hero;