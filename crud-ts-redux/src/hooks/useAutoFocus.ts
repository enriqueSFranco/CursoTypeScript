import type React from 'react'
import { useEffect, useRef } from 'react'

type RefType = React.RefObject<HTMLInputElement> | React.RefObject<HTMLTextAreaElement>

export const useAutoFocus = ({ externalRef }: RefType) => {
  const fromRef = useRef<HTMLInputElement>(null)

  const $element = (externalRef != null) || fromRef

  useEffect(() => {
    $element.current.focus()
  }, [])
  return $element
}
