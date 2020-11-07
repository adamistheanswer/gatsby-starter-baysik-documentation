import { useRef, useLayoutEffect, useEffect } from 'react'

const isBrowser = typeof window !== `undefined`

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

const getScrollPosition = ({
  element,
  useWindow,
}: {
  useWindow: boolean
  element?: React.RefObject<HTMLElement>
}) => {
  if (!isBrowser) return { x: 0, y: 0 }

  if (!useWindow) {
    const target = element ? element.current && element.current : document.body
    const position = target
      ? target.getBoundingClientRect()
      : { left: 0, top: 0 }
    return { x: position.left, y: position.top }
  } else {
    return { x: window.scrollX, y: window.scrollY }
  }
}

const useScrollPosition = (
  effect: (positions: { prevPos: any; currPos: any }) => void,
  deps: any[],
  useWindow: boolean,
  element?: React.RefObject<HTMLElement>,
  wait?: number
) => {
  const position = useRef(getScrollPosition({ useWindow }))

  let throttleTimeout: any = null

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return
    }

    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}

export default useScrollPosition
