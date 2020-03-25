import React from 'react'
import { List } from './styles'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
  return (
    <List>
      {[1, 2, 3].map((id) => (
        <PhotoCard key={id} />
      ))}
    </List>
  )
}
