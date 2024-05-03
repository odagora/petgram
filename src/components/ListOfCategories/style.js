import styled from 'styled-components'
import { bounceDown } from '../../styles/animations'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  &.fixed {
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgb(0 0 0 / 30%);
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 5px;
    max-width: 400px;
    position: fixed;
    top: 0;
    transform: scale(0.5);
    z-index: 1;
    ${bounceDown({ time: '2s' })}
  }
`

export const Item = styled.li`
  padding: 0 8px;
`
