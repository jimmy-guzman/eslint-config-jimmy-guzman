import jest from './index'

describe('jest', () => {
  it('should export jest rules config', () => {
    expect(Object.keys(jest.overrides[0].rules)).toHaveLength(47)
    expect(jest).toMatchSnapshot()
  })
})
