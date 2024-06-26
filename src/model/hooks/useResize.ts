import { useEffect, useState } from 'react'

export const useResize = () => {
  const [windowSizes, setWindowSizes] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSizes({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    width: windowSizes.width,
    height: windowSizes.height,
    isMobile: windowSizes.width <= 600,
    isTablet: windowSizes.width > 600 && windowSizes.width <= 900,
    isSmallDesktop: windowSizes.width > 900 && windowSizes.width < 1200,
    isDesktop: windowSizes.width >= 1200,
  }
}
