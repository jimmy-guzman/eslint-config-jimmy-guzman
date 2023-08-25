import typescript from './index'

describe('typescript', () => {
  it('should export typescript rules config', () => {
    expect(Object.keys(typescript.overrides[0].rules)).toHaveLength(150)
    expect(typescript).toMatchSnapshot()
  })
})
