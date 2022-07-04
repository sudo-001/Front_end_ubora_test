import styled, { keyframes } from 'styled-components';
import Colors from './Colors';


const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

export const Loader = styled.div`
    border: 4px dotted ${Colors.primary};
    padding: 10px;
    border-bottom-color: transparent;
    border-radius: 22px;
    animation: ${rotate} 1s infinite linear;
    height: 0;
    width: 0;
`