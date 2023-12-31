import jest from './index'

describe('vitest', () => {
  it('should export vitest rules config', () => {
    expect(Object.keys(jest.overrides[0].rules)).toHaveLength(57)
    expect(jest).toMatchSnapshot()
  })
})
