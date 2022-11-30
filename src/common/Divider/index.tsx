import {memo} from 'react'
import cn from 'classnames'

export const Divider = memo(function Divider(props: {className?: string, children?: string}) {
  return <div
    className={cn(
      'flex items-center gap-x-2 empty:gap-x-0 text-sm text-center',
      'before:grow before:h-px before:bg-current before:opacity-30',
      'after:grow after:h-px after:bg-current after:opacity-30',
      props.className,
    )}
  >
    {props.children}
  </div>


})
