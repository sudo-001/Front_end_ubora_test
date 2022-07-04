import React from 'react';
import styled from 'styled-components';
import Image404 from '../../images/404.png';
import Colors from '../../utils/style/Colors';

const ErrorStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 80vh;
`
const Label = styled.h2`
    color: grey;
`


function NotFound() {
    return (
        <ErrorStyled>
            <Label>Oups...</Label>
            <img src={Image404} alt="404" />
            <Label>Cette page n'existe pas ou est en construction</Label>
        </ErrorStyled>
    )
}

export default NotFound