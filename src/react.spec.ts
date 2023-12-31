import react from './react'

describe('react', () => {
  it('should export react rules config', () => {
    expect(Object.keys(react.rules)).toHaveLength(125)
    expect(react).toMatchSnapshot()
  })
})
