import {memo, ReactElement} from 'react'
import {MouseParallaxChild} from 'react-parallax-mouse'
import cn from 'classnames'

export const Slide = memo(function Slide(props: {
  children: ReactElement
  className?: string,
  factorX: number,
  factorY: number,
}) {
  return <MouseParallaxChild factorX={props.factorX} factorY={props.factorY} className={cn('', props.className)}>
    {props.children}
  </MouseParallaxChild>
})
