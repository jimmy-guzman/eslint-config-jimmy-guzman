import imports from './index'

describe('imports', () => {
  it('should export imports rules config', () => {
    expect(Object.keys(imports.rules)).toHaveLength(42)
    expect(imports).toMatchSnapshot()
  })
})
