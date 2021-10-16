import { rules as typescript } from '../src/typescript/rules'

export = {
  extends: ['prettier'],
  plugins: ['@typescript-eslint'],
  rules: { ...typescript },
}
