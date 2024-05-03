import { css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0px);
    opacity: 1;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`animation: ${time} ${fadeInKeyframes} ${type};`

const bounceDownKeyFrames = keyframes`
  0% { top: 0px; }
  20% { top: -5px; }
  40% { top: 5px; }
  60% { top: -2px; }
  80% { top: 1px; }
  100% { top: 0px; }
`

export const bounceDown = ({ time = '1s', type = 'ease' } = {}) => css`animation: ${time} ${bounceDownKeyFrames} ${type}`
