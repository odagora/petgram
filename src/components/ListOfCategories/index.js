import React, { useState, useEffect } from 'react'
import { Category, CategorySkeleton } from '../Category'
import { Item, List } from './style'
import { useGetCategories } from '../../hooks/useGetCategories'

export const ListOfCategories = () => {
  const { categories, loading } = useGetCategories()
  const [showFixed, setShowFixed] = useState(false)

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

  const renderList = ({ fixed, light }) => (
    <List $fixed={fixed}>
      {loading
        ? Array(6).fill(0).map((_, index) => (
          <Item key={index}><CategorySkeleton light={light} /></Item>
        ))
        : categories.map(category => (
          <Item key={category.id}><Category {...category} /></Item>
        ))}
    </List>
  )

  return (
    <>
      {renderList({ light: true })}
      {showFixed && renderList({ fixed: true })}
    </>
  )
}
