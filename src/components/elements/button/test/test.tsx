import { render, screen } from '@testing-library/react'

import { Button } from '../'

describe('<Button />', () => {
  it('should render the reading', () => {
    render(<Button title="title" />)

    expect(screen.getByRole('heading', { name: /Button/i })).toBeInTheDocument()
  })
})
