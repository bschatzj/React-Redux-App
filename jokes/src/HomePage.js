import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Header from './header';

const Home = styled.div`
height: 80%;
width: 80%;
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
margin: 10%;
`
const Links = styled.h1`
color: orange;
font-size: 2.5rem;
`

const Head = styled.h1`
color:grey;
font-size: 4rem;
font: comic-sans;
@import url("https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap");
    font-family: 'Permanent Marker', cursive;;
`

export default function HomePage() {
    return (
        <Home>
            <Head>CHOOSE A JOKE CATEGORY!</Head>
            <NavLink to={'/Chuck-Noris'}><Links>Ron Swanson</Links></NavLink>
            <NavLink to={'/Dad-Jokes'}><Links>Random Jokes</Links></NavLink>
            <NavLink to={'/Tech-Jokes'}><Links>Tech Jokes</Links></NavLink>
            {/* <NavLink to={'/Bad-Jokes'}><Links>WARNING! NOT FOR WORK JOKES!!!</Links></NavLink> */}
        </Home>
    )
}