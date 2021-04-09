import React from 'react';

import img1 from 'images/image-1.jpg';
import img2 from 'images/image-2.jpg';

import Header from 'components/Header';
import {Button, SecondButton} from 'elements/Buttons';
import {DishButton} from 'components/Dish';
import Hero from 'components/Hero';
import Banner from 'components/Banner';
import {BasicInput} from 'elements/Inputs';
import {RedBox, GreenBox} from 'elements/Boxes';
import Navbar from 'components/Navbar';
import Content from 'components/Content';

const Home = ({theme, setTheme, themes}) => {
    return (
        <div>
            <Header title="styled components course"/>

            <Navbar>
            <SecondButton onClick={() => {setTheme((theme + 1) % themes.length)}}>Change Theme</SecondButton>
            </Navbar>

            <Content>
            <div>
                <GreenBox>
                <Button>click me</Button>
                <SecondButton>I'm second</SecondButton>
                </GreenBox>
            </div>

            <div>
                <RedBox>
                <DishButton size="10px">salad</DishButton>
                <DishButton size="1rem">soup</DishButton>
                <DishButton size="24px">steak</DishButton>
                <DishButton>sandwich</DishButton>
                </RedBox>
            </div>

            <div>
                <Hero img={img1}>
                <Banner title="this is my banner" />
                </Hero>
                <Hero img={img2} />
            </div>

            <BasicInput />
            </Content>
        </div>
    )
}

export default Home;