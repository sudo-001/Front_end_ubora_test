import React from 'react';
import { createGlobalStyle } from 'styled-components';
import '../fonts/FontAwesome.otf';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family:"ubora-sudo";
    src: local('ubuntu');
    font-weight: 800;
    
}

* {
    font-family: 'ubora-sudo';
}


`

export default GlobalStyle;