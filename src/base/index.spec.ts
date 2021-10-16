import base from './index'

describe('base', () => {
  it('should export base rules config', () => {
    expect(base).toMatchSnapshot()
  })
})
