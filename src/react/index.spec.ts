import react from './index'

describe('react', () => {
  it('should export react rules config', () => {
    expect(Object.keys(react.rules)).toHaveLength(120)
    expect(react).toMatchSnapshot()
  })
})
