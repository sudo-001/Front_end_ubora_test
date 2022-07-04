import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.div`
    text-align: center;
    color: grey;
`

function Footer() {
    return(
        <FooterStyled>
            &copy; 2022 All right reserved | sudo
        </FooterStyled>
    )
}

export default Footer;