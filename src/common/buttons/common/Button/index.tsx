import {ButtonHTMLAttributes, memo} from 'react'
import {Spinner} from 'common/Spinner'
import cn from 'classnames'

export type ButtonType = {
  children: string,
  className?: string,
  isDisabled?: boolean,
  isLoading?: boolean,
  onClick?: VoidFunction,
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'],
}

export const Button = memo(function Button(
  props: ButtonType,
) {
  return <button
    className={cn(
      'inline-grid h-10 place-items-center rounded-sm transition-colors disabled:cursor-not-allowed disabled:opacity-30',
      'outline-none focus-within:outline-slate-900',
      props.className,
    )}
    disabled={props.isDisabled || props.isLoading}
    onClick={props.onClick}
    type={props.type ?? 'button'}
  >
    <Spinner isShown={props.isLoading} className="span-full" />

    <span className={cn('span-full block transition-opacity', {'opacity-0': props.isLoading})}>
      {props.children}
    </span>
  </button>
})
