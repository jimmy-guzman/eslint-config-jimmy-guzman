import bestPractices from './index'

describe('bestPractices', () => {
  it('should export bestPractices rules config', () => {
    expect(Object.keys(bestPractices.rules)).toHaveLength(84)
    expect(bestPractices).toMatchSnapshot()
  })
})
