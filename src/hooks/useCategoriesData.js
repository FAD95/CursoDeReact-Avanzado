import { useEffect, useState } from 'react'

export const useCategoriesData = () => {
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
