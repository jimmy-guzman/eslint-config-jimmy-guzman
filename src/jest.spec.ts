import jest from './jest'

describe('jest', () => {
  it('should export jest rules config', () => {
    expect(Object.keys(jest.overrides[0].rules)).toHaveLength(57)
    expect(jest).toMatchSnapshot()
  })
})
