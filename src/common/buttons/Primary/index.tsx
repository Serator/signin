import {Button, ButtonType} from 'common/buttons/common/Button'
import {memo} from 'react'
import cn from 'classnames'

export const Primary = memo(function Primary(
  props: ButtonType,
) {
  return <Button
    {...props}
    className={cn('bg-orange-800 text-white hover:bg-orange-700 disabled:bg-orange-800', props.className)}
  >
    {props.children}
  </Button>
})
