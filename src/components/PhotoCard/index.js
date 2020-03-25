import React from 'react'
import { ImgWrapper, Img, Button } from './styles'
import { GiAnarchy } from 'react-icons/gi'
const DEFAULT_IMAGE =
  ' https://images.unsplash.com/photo-1522720833375-9c27ffb02a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} alt="" />
        </ImgWrapper>
      </a>
      <Button>
        <GiAnarchy size="32px" />
        {likes} Anarchies!
      </Button>
    </article>
  )
}
