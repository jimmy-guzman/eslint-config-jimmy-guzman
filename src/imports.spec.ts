import imports from './imports'

describe('imports', () => {
  it('should export imports rules config', () => {
    expect(Object.keys(imports.rules)).toHaveLength(45)
    expect(imports).toMatchSnapshot()
  })
})
