import React from 'react'
import { Anchor, AnchorSkeleton, Image, ImageSkeleton, TitleSkeleton } from './styles'

const DEFAULT_IMAGE = 'https://imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} alt='' />
    {emoji}
  </Anchor>
)

export const CategorySkeleton = ({ light }) => (
  <AnchorSkeleton>
    <ImageSkeleton $light={light} />
    <TitleSkeleton $light={light} />
  </AnchorSkeleton>
)
