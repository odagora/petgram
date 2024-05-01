import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { Item, List } from './style'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://petgram-server-odagora.vercel.app/categories')
      .then(data => data.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  return (
    <List>
      {categories.map(category => (
        <Item key={category.id}><Category {...category} /></Item>
      ))}
    </List>

  )
}
