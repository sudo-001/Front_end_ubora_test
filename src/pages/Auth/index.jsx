import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import LoginImage from '../../images/login-form.png'

const AuthWrapper = styled.div`
    padding: 40px 70px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const AuthContainer = styled.div`
    // border: solid 1px black;
    height: 80vh;
    width: 60vh;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`
const FormImg = styled.div`
    height: 50%;
    // border: solid green;
    border-radius: 20px 20px 0px 0px ;
    background: url(${LoginImage}) no-repeat;
    background-size: contain;
`

const FormStyled = styled.form`
    // border: solid red;
    display: flex;
    flex-direction: column;
    height: 40%;
    padding: 0px 40px;
    text-align: center;
    box-shadow: -0px -30px 120px rgba(0,0,0,0.2);
    padding-bottom: 10px;

    >label {
        margin-top: 20px;
        color: blue;
        text-align: left;
    }
    >input{
        // border: solid 1px black;
        height: 20px;
        border-color: transparent transparent black transparent ;
        transition: transform 100ms, margin 100ms 100ms;
        &:focus {
            transform: scaleY(1.2);
            margin: 3px 0px;
            padding: 2px;
        }
    }

    +p {
        text-align: center;
    }
`

const SubmitBtn = styled.button`
    border: solid 1px rgba(0, 0, 0, 0);
    height: 40px;
    cursor: pointer;
    margin-top: 10px;
    width: 100%;
    border-radius: 20px;
    font-size: 18px;
    background: #6cd9f3;  
`


function Authentification() {

    return (
        <AuthWrapper>
            <AuthContainer>

                <FormImg></FormImg>

                <FormStyled>
                    <h2>SIGN IN</h2>
                    <label htmlFor="login">E-mail :</label>
                    <input type="email" name="login" id="login" placeholder='Ex: JohnDoe@example.com' />

                    <label htmlFor='mdp' >Password :</label>
                    <input type="password" name="password" id="mdp" />

                    <SubmitBtn type="submit" >Connect</SubmitBtn>
                </FormStyled>
                <p>Vous n'avez pas de compte ? <Link to="/inscription">créer un</Link></p>
            </AuthContainer>
        </AuthWrapper>

    )
}

export default Authentification