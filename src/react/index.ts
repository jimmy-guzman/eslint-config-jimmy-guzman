import { rules } from './rules'

export = {
  extends: ['prettier'],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules,
  settings: { react: { version: 'detect' } },
}
