import {Divider} from 'common/Divider'
import {Form} from './Form'
import {Illustration} from './Illustration'
import {memo} from 'react'
import {MouseParallaxContainer} from 'react-parallax-mouse'
import {SocialLinks} from './SocialLinks'

export const SignIn = memo(function SignIn(props: {className?: string}) {
  return <div className="grid min-h-screen p-6 bg-[linear-gradient(#e8d0a4,_#d2f082)] text-slate-900">
    <MouseParallaxContainer
      className="m-auto grid grid-flow-col auto-cols-fr max-w-sm lg:max-w-3xl w-full rounded-xl shadow-[0_35px_60px_-15px_theme(colors.slate.900/40%)] overflow-hidden select-none"
      globalFactorX={0.1}
      globalFactorY={0.1}
      resetOnLeave
    >
      <Illustration className="max-lg:!hidden grayscale-[25%]" />

      <div className="bg-white p-8 grid gap-y-8 content-between">
        <h1 className="text-4xl capitalize text-center font-light leading-none">Sign in</h1>
        <SocialLinks />
        <Divider>Or use your account</Divider>
        <Form className="!contents" />
        <a className="justify-self-center text-sm underline hover:opacity-75 transition-opacity rounded-sm outline-none focus-within:outline-current" href="/">Forgot your password?</a>
      </div>
    </MouseParallaxContainer>
  </div>
})
