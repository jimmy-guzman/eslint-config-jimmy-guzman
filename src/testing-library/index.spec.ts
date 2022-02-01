import testingLibrary from './index'

describe('testing-library', () => {
  it('should export react rules config', () => {
    expect(Object.keys(testingLibrary.overrides[0].rules)).toHaveLength(37)
    expect(testingLibrary).toMatchSnapshot()
  })
})
