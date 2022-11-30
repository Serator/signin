import {Link} from '../index'
import {render} from '@testing-library/react'

describe('Link', () => {
  it('renders properly', () => {
    render(<Link type="facebook" />)
  })
})
