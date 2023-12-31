import typescript from './typescript'

describe('typescript', () => {
  it('should export typescript rules config', () => {
    expect(Object.keys(typescript.overrides[0].rules)).toHaveLength(155)
    expect(typescript).toMatchSnapshot()
  })
})
