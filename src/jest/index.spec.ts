import jest from './index'

describe('jest', () => {
  it('should export jest rules config', () => {
    expect(Object.keys(jest.overrides[0].rules)).toHaveLength(54)
    expect(jest).toMatchSnapshot()
  })
})
