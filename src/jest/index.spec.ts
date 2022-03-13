import jest from './index'

describe('jest', () => {
  it('should export jest rules config', () => {
    expect(Object.keys(jest.overrides[0].rules)).toHaveLength(51)
    expect(jest).toMatchSnapshot()
  })
})
