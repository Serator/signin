import {memo} from 'react'
import {Slide} from './Slide'
import cn from 'classnames'
import frame0 from './assets/frame-0.svg'
import frame1 from './assets/frame-1.svg'
import frame2 from './assets/frame-2.svg'
import frame3 from './assets/frame-3.svg'
import frame4 from './assets/frame-4.svg'
import frame5 from './assets/frame-5.svg'

export const Illustration = memo(function Illustration(props: {className?: string}) {
  return <div className={cn('overflow-hidden grid', props.className)} aria-hidden>
    <Slide className="-m-8 span-full relative" factorX={0} factorY={0}>
      <img alt="" className="absolute inset-0 object-cover w-full h-full" src={frame0} />
    </Slide>

    <Slide className="-m-8 span-full relative" factorX={0.2} factorY={0.1}>
      <img alt="" className="absolute inset-0 object-cover w-full h-full" src={frame1} />
    </Slide>

    <Slide className="-m-8 span-full relative" factorX={0.3} factorY={0.2}>
      <img alt="" className="absolute inset-0 object-cover w-full h-full" src={frame2} />
    </Slide>

    <Slide className="-m-8 span-full relative" factorX={0.4} factorY={0.3}>
      <img alt="" className="absolute inset-0 object-cover w-full h-full" src={frame3} />
    </Slide>

    <Slide className="-m-8 span-full relative" factorX={0.6} factorY={0.4}>
      <img alt="" className="absolute inset-0 object-cover w-full h-full" src={frame4} />
    </Slide>

    <Slide className="-m-8 span-full relative" factorX={1} factorY={0.6}>
      <img alt="" className="absolute inset-0 object-cover w-full h-full" src={frame5} />
    </Slide>
  </div>
})
