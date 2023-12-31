import base from './base'

describe('base', () => {
  it('should export base rules config', () => {
    expect(base).toMatchSnapshot()
  })
})
