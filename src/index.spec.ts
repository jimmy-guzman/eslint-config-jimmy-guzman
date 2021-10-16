import rules from './index'

const expectedRulePath = (rule: string): string => {
  return `${process.cwd()}/src/${rule}/index.ts`
}

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
      extends: expect.arrayContaining(expectedRules.map(expectedRulePath)),
    })
  })
})
