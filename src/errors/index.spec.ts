import errors from './index'

describe('errors', () => {
  it('should export errors rules config', () => {
    expect(Object.keys(errors.rules)).toHaveLength(69)
    expect(errors).toMatchSnapshot()
  })
})
