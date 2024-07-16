import { useEffect, useState } from 'react'

export const useOnScreen = (ref, rootMargin = '0px') => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  let observer

  useEffect(() => {
    (window.IntersectionObserver
      ? Promise.resolve()
      : import('intersection-observer')
    ).then(() => {
      observer = new window.IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      }, { rootMargin })
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => observer.unobserve(ref.current)
  }, [])

  return isIntersecting
}
