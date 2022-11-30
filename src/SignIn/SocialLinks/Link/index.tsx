import {CSSProperties, memo} from 'react'
import cn from 'classnames'
import facebookIcon from './assets/facebook.svg'
import googleIcon from './assets/google.svg'
import linkedinIcon from './assets/linkedin.svg'

const vendors = {
  facebook: {
    icon: facebookIcon,
    name: 'Facebook',
  },

  google: {
    icon: googleIcon,
    name: 'Google',
  },

  linkedin: {
    icon: linkedinIcon,
    name: 'LinkedIn',
  },
}

export const Link = memo(function Link(props: {className?: string, type: 'facebook' | 'google' | 'linkedin'}) {
  return <a
    className={cn(
      'block w-7 h-7 rounded-full outline-none focus-within:outline-current',
      'hover:opacity-75 transition-opacity',
      props.className,
    )}

    style={{'--image-path': `url("${vendors[props.type].icon}")`} as CSSProperties}
    href="/"
    title={vendors[props.type].name}
  >
    <span className="overflow-hidden block bg-current h-[inherit] [mask-image:_var(--image-path)]">
      <span className="pointer-events-none text-transparent">
        {vendors[props.type].name}
      </span>
    </span>
  </a>
})
