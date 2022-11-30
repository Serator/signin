import {render, screen} from '@testing-library/react'
import {SignIn} from '../index'

describe('SignIn', () => {
  it('renders properly', () => {
    render(<SignIn />)
    const titleElement = screen.getByText(/Sign in/)
    expect(titleElement).toBeInTheDocument()
  })
})
