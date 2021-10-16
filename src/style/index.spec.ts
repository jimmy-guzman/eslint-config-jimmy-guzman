import style from './index'

describe('style', () => {
  it('should export style rules config', () => {
    expect(Object.keys(style.rules)).toHaveLength(55)
    expect(style).toMatchSnapshot()
  })
})
