import { rules as bestPractices } from '../src/best-practices/rules'
import { rules as errors } from '../src/errors/rules'
import { rules as style } from '../src/style/rules'

export = {
  extends: ['prettier'],
  rules: { ...bestPractices, ...errors, ...style },
}
