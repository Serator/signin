import {Link} from './Link'
import {memo} from 'react'
import cn from 'classnames'

export const SocialLinks = memo(function SocialLinks(props: {className?: string}) {
  return <div className={cn('grid grid-flow-col gap-x-4 justify-center', props.className)}>
    <Link type="facebook" />
    <Link type="google" />
    <Link type="linkedin" />
  </div>
})
