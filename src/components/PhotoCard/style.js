import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  overflow: hidden;
  width: 100%;
`

export const Img = styled.img`
  ${fadeIn({ time: '2s' })}
  box-shadow: 0 10px 14px rgb(0 0 0 / 2%);
  height: 100%;
  object-fit: cover;
  aspect-ratio: 16/9;
  width: 100%;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`
