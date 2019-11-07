import React from "react";
import { NavLink  } from 'react-router-dom';
import styled from 'styled-components'

const Head = styled.div`
text-align: center;
font-size: 3rem;
`

export default function Header() {
    return (
        <NavLink to={'/'}><Head>HOME</Head></NavLink>
    )
}