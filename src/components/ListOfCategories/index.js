import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { Item, List } from './style'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    fetch('https://petgram-server-odagora.vercel.app/categories')
      .then(data => data.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const isNotInThreshold = window.scrollY < 200
      setShowFixed(!isNotInThreshold)
    }

    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  const renderList = (fixed) => (
    <List $fixed={fixed}>
      {categories.map(category => (
        <Item key={category.id}><Category {...category} /></Item>
      ))}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
