import { rules as bestPractices } from '../src/best-practices/rules'
import { rules as errors } from '../src/errors/rules'
import { rules as jest } from '../src/jest/rules'
import { rules as style } from '../src/style/rules'

export = {
  plugins: ['jest'],
  rules: { ...jest, ...bestPractices, ...errors, ...style },
}
