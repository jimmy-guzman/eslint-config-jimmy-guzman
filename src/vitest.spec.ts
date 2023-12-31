import vitest from './vitest'

describe('vitest', () => {
  it('should export vitest rules config', () => {
    expect(Object.keys(vitest.overrides[0].rules)).toHaveLength(57)
    expect(vitest).toMatchSnapshot()
  })
})
