import { keyframes, css } from 'styled-components'

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${fadeInKeyFrames} ${type};
`
const fadeInKeyFrames = keyframes`
 from{
   filter: blur(5px);
   opacity: 0;
 }
 to{
   filter: blur(0);
   opacity: 1;
 }
`

const bounceDownKeyFrames = keyframes`
 0% {
    top: -70px;
  }
  25%{
    top: 0px;
  }
  50%{
    top: -40px;
  }
  75%{
    top: 0px;
  }
  100% {
    top: -20px;
  }
`

export const bounceDown = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${bounceDownKeyFrames} ${type};
  `
