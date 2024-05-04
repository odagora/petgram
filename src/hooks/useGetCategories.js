import { useState, useEffect } from 'react'

export const useGetCategories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)
    fetch('https://petgram-server-odagora.vercel.app/categories')
      .then(data => data.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
      })
  }, [])

  return { categories, loading, error }
}
