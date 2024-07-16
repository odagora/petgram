import React, { useEffect, useRef, useState } from 'react'
import { Button, Img, ImgWrapper, Article } from './style'
import { MdFavoriteBorder } from 'react-icons/md'
import { useOnScreen } from '../../hooks/useOnScreen'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null)
  const isOnScreen = useOnScreen(ref)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isOnScreen) {
      setShow(true)
    }
  }, [isOnScreen])

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`details/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='image' />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size='32px' />{likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
