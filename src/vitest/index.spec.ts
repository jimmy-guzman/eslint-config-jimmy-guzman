import jest from './index'

describe('vitest', () => {
  it('should export vitest rules config', () => {
    expect(Object.keys(jest.overrides[0].rules)).toHaveLength(56)
    expect(jest).toMatchSnapshot()
  })
})
