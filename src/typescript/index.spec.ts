import typescript from './index'

describe('typescript', () => {
  it('should export typescript rules config', () => {
    expect(Object.keys(typescript.overrides[0].rules)).toHaveLength(141)
    expect(typescript).toMatchSnapshot()
  })
})
