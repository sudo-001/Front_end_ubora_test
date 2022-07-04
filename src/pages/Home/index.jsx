import React from 'react';
import styled, { keyframes } from 'styled-components';
import homeRight from '../../images/homeRight.png'
import Colors from '../../utils/style/Colors';

const HomeStyle = styled.div`
  height: 80vh;
  display: flex;
  padding: 20px 70px;
`

const LeftHomeStyled = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  flex: 1;
  letter-spacing: 1px;
  padding-left: 30px;
  justify-content: center;

  > h1 {
    font-size: 60px;
    font-weight: thin;
    padding: 0px 10px;
    font-weight: 400;
    font-family: Ubuntu;
  }
  > p {
    width: 60%;
    color: grey;
    padding: 10px;
    margin-top: -20px;
    font-weight: 600;
    line-height: 160.5%;
  }
`
const RightHomeStyled = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-right: 4
  
`

const move = keyframes`
  from {
    transform: translateY(-15px);
  }

  to {
    transform: translateY(10px) ;
  }
`

const ImgStyle = styled.img`
  width: 600px;
  height: 600px;
  animation: ${move} infinite 3s alternate-reverse linear;
  transition: transform 500ms;
`

const BtnConsult = styled.button`
  width: max-content;
  padding: 20px 40px;
  background: ${Colors.primary};
  color: white;
  border-radius: 60px;
  border: solid 1px transparent;
  font-size: 18px;
  cursor: pointer;
`


function Home() {
  return (
    <HomeStyle>
      <LeftHomeStyled>
        <h1><span>A</span>nnuary <span>G</span>estion</h1>
        <p>La gestion des membres de vos équipes de développeur n'a jamais été aussi facile. D'un clic gérez l'annuaire des vos membres</p>

        <BtnConsult>Consulter l'annuaire</BtnConsult>

      </LeftHomeStyled>

      <RightHomeStyled>
        <ImgStyle src={homeRight} />
      </RightHomeStyled>
    </HomeStyle>
  )
}

export default Home;
