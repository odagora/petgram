import React from 'react'
import { Button, Img, ImgWrapper } from './style'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`details/${id}`}>
        <ImgWrapper>
          <Img src={src} alt='image' />
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size='32px' />{likes} likes!
      </Button>
    </article>
  )
}
