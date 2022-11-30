import {memo} from 'react'
import {SignIn} from './SignIn'

export const App = memo(function App(props: {className?: string}) {
  return <SignIn className={props.className} />
})
