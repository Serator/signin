import {Input} from 'common/forms/Input'
import {memo, useCallback} from 'react'
import {Primary as PrimaryButton} from 'common/buttons/Primary'
import {SubmitHandler, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import cn from 'classnames'

type FormType = {
  email: string
  password: string
}

export const Form = memo(function Form(props: {className?: string}) {
  const schema: yup.SchemaOf<FormType> = yup.object({
    email: yup.string().required('E-mail is required').email('Wrong email'),
    password: yup.string().required('Password is required'),
  })

  const {
    handleSubmit,
    register,
    formState: {errors, isSubmitting, touchedFields},
  } = useForm<FormType>({
    defaultValues: {
      email: '',
      password: '',
    },

    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  const submit: SubmitHandler<FormType> = useCallback(
    async (data: FormType) => {
      try {
        await new Promise((resolve) => {
          setTimeout(resolve, 1500)
        })

        console.log(data)
      } catch (error) {
        console.error('Wrong email or password')
      }
    },
    [],
  )

  return <form className={cn('grid gap-y-8', props.className)} onSubmit={handleSubmit(submit)}>
    <div className="grid gap-y-4">
      <Input
        {...register('email')}
        errorMessage={errors.email?.message}
        isValid={!errors.email?.message && touchedFields.email}
        title="Email"
        type="email"
      />

      <Input
        {...register('password')}
        errorMessage={errors.password?.message}
        isValid={!errors.password?.message && touchedFields.password}
        title="Password"
        type="password"
      />
    </div>

    <PrimaryButton className="capitalize" isLoading={isSubmitting} type="submit">Get started</PrimaryButton>
  </form>
})
