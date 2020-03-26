import React, { useEffect, useState, Fragment } from 'react'
import { Category } from '../Category/index'
import { ListContainer, List, Item } from './styles'
import Loader from 'react-loader-spinner'
const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window
      .fetch('https://petgram-fad-api.now.sh/categories')
      .then((res) => res.json())
      .then((res) => {
        setCategories(res)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}
export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <ListContainer fixed={fixed}>
      <List>
        {loading ? (
          <Item key="loading">
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </Item>
        ) : (
          categories.map((category) => (
            <Item key={category.id}>
              <Category {...category} />
            </Item>
          ))
        )}
      </List>
    </ListContainer>
  )

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}
