import testingLibrary from './testing-library'

describe('testing-library', () => {
  it('should export react rules config', () => {
    expect(Object.keys(testingLibrary.overrides[0].rules)).toHaveLength(38)
    expect(testingLibrary).toMatchSnapshot()
  })
})
