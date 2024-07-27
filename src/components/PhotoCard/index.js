import React, { useEffect, useRef, useState } from 'react'
import { Button, Img, ImgWrapper, Article } from './style'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useOnScreen } from '../../hooks/useOnScreen'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null)
  const isOnScreen = useOnScreen(ref)
  const [show, setShow] = useState(false)
  const key = `photo-card-${id}`
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return like !== null ? JSON.parse(like) : false
    } catch (error) {
      return false
    }
  })

  useEffect(() => {
    if (isOnScreen) {
      setShow(true)
    }
  }, [isOnScreen])

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setLiked(value)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`details/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='image' />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size='32px' />{likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
