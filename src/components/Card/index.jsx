import React from 'react';
import styled from 'styled-components';
import Colors from '../../utils/style/Colors';

const CardWrapper = styled.div`
    padding: 20px 30px;
    background: white;
    margin: 10px 0px;
    // border: solid red;
    background-color: ${Colors.second};
    border-radius: 20px;
    transition: transform 300ms;
    width: 80%;

    &:hover {
        transform: scale(1.01);
        box-shadow: 2px 5px 10px grey;
    }
`
const Adresse = styled.div`
    background-color: ${Colors.background};
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 20px;
    
    span {
        color: green;
    }
`

const BtnContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    button{
        padding: 10px;
        font-size: medium;
        margin: 10px 10px 10px 0px;
        border-radius: 10px;
        cursor: pointer;
    }

    .btn1 {
        border: solid green 1px;
        &:hover {
            background: ${Colors.fourth};
            color: white;
        }
    }

    .btn2 {
        border: solid ${Colors.primary} 1px;
        &:hover {
            background: ${Colors.primary};
            color: white;
        }
    }
`

function Card({ nom, prenom, email, telephone,  projets}) {
    return(
        <CardWrapper>
            <h3>Nom:{ nom }</h3>
            <h3>Prenom: {prenom}</h3>
            <Adresse>
                <h3>Téléphone: <span>{ telephone }</span></h3>
                <h3>email: <span>{ email }</span></h3>
            </Adresse>

            <BtnContainerStyled>
                <button className="btn1">Consulter</button>
                <button className="btn2">Assigner une tache</button>
            </BtnContainerStyled>
        </CardWrapper>
    )
}

export default Card;