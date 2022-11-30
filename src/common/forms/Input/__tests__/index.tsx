import {Input} from '../index'
import {render} from '@testing-library/react'

describe('Input', () => {
  it('renders properly', () => {
    render(<Input title="test" />)
  })
})
