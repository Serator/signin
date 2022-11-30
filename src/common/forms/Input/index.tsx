import {ForwardedRef, forwardRef, InputHTMLAttributes, memo} from 'react'
import cn from 'classnames'

export const Input = memo(forwardRef(function Input(
  props: {
    className?: string,
    title: String,
    type?: InputHTMLAttributes<HTMLInputElement>['type']
    isDisabled?: boolean
    errorMessage?: string
    isValid?: boolean
  } & InputHTMLAttributes<HTMLInputElement>,

  ref: ForwardedRef<HTMLInputElement>,
) {
  return <label className={cn('relative grid gap-y-1', props.className)}>
    <span className="leading-none transition-colors text-sm opacity-80">
      {props.title}
    </span>

    <input
      {...Object.fromEntries(
        Object.entries(props).filter(([key]) => !['isValid', 'errorMessage', 'isDisabled'].includes(key)),
      )}

      className={cn(
        'h-8 bg-transparent transition-[box-shadow]',
        'outline-none',
        '[box-shadow:_0_calc(theme(spacing.px)_*_-1)_var(--border-color)_inset]',

        {
          '[--border-color:_theme(colors.red.800/30%)] focus:[--border-color:_theme(colors.red.800)]':
            !props.isValid && !props.isDisabled,

          '[--border-color:_theme(colors.slate.900/30%)] focus:[--border-color:_theme(colors.slate.900)]':
            props.isValid && !props.isDisabled,
        }

      )}

      disabled={props.isDisabled}
      ref={ref}
      type={props.type ?? 'text'}
    />

    {props.errorMessage && (
      <div
        className={cn(
          'text-10 absolute inset-x-0 top-full text-right text-sm text-red-800 first-letter:uppercase w-full truncate',
          'pointer-events-none',
        )}
      >
        {props.errorMessage}
      </div>
    )}
  </label>
}))
