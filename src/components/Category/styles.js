import { styled, css } from 'styled-components'
import { skeletonStyle } from '../../styles/animations'

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgb(0 0 0 /20%);
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`

export const AnchorSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImageSkeleton = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  ${props => css`
    ${skeletonStyle(props.$light)}
  `}
`
export const TitleSkeleton = styled.div`
  width: 26px;
  height: 15px;
  margin-top: 8px;
  ${props => css`
    ${skeletonStyle(props.$light)}
  `}
`
