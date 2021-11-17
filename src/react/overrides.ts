import { EslintRules } from '../models'

export const eslintOverrides: EslintRules = {
  'class-methods-use-this': [
    'error',
    {
      exceptMethods: [
        'render',
        'getInitialState',
        'getDefaultProps',
        'getChildContext',
        'componentWillMount',
        'UNSAFE_componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'UNSAFE_componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'UNSAFE_componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        'componentDidCatch',
        'getSnapshotBeforeUpdate',
      ],
    },
  ],
}
