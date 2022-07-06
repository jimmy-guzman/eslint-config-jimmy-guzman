import rules from './index'

describe('index', () => {
  it('should have tests', () => {
    const expectedRules = [
      'base',
      'imports',
      'errors',
      'best-practices',
      'style',
    ]

    expect(rules).toMatchObject({
      extends: expect.arrayContaining(expectedRules.map((rule) => `./${rule}`)),
    })
  })
})
