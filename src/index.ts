const configs = ['base', 'imports', 'errors', 'best-practices', 'style']

export = {
  extends: configs.map((config) => `./${config}`),
}
