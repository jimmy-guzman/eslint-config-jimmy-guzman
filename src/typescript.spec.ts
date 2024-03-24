import typescript from './typescript'

describe('typescript', () => {
  it('should export typescript rules config', () => {
    const [{ rules = {} }] = typescript.overrides

    expect(Object.keys(rules)).toHaveLength(164)
    expect(typescript).toMatchSnapshot()
  })
})
