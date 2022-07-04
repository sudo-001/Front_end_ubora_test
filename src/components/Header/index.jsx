import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderStyled = styled.div`
    border: solid red;
    display: flex;
    padding: 20px 70px;
    justify-content: space-between;
    align-items: center;

    @media (max-width:820px) {
        flex-direction: column;
        justify-content: center;
    }
`

const LinkStyled = styled(Link)`
    padding: 15px;
    margin: 0 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
`

const NavStyled = styled.div`
    @media (max-width:820px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

function Header() {
    return (
        <HeaderStyled>
            <div>
                <img src="" alt="logo" />
            </div>

            <nav>
                <NavStyled>
                    <LinkStyled to="/">Accueil</LinkStyled>
                    <LinkStyled to="/contact">Contacts</LinkStyled>
                    <LinkStyled to="/contact/add">Ajouter Contact</LinkStyled>
                    <LinkStyled to="/Connection">Signin</LinkStyled>
                </NavStyled>
            </nav>
        </HeaderStyled>
    )
}

export default Header;