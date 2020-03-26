import React from 'react'
import { List } from './styles'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
  return (
    <List>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
        <PhotoCard key={id} id={id} />
      ))}
    </List>
  )
}
