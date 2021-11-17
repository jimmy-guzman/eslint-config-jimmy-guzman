type Config = 'error' | 'off' | 'warn'

type Options = Record<string, unknown> | string

export type EslintRules = Record<string, Config | [Config, Options]>
