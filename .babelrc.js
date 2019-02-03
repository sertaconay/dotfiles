module.exports = (api) => {
  api.cache(false);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          loose: true,
          targets: {
            browsers: ['last 2 versions'],
          },
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      'react-hot-loader/babel',
      [
        'transform-imports',
        {
          lodash: {
            transform: 'lodash/${member}',
            preventFullImport: true,
          },
        },
      ],
      ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }],
      ['emotion', { sourceMap: true, autoLabel: true }],
      '@babel/plugin-proposal-class-properties',
    ],
  };
};
