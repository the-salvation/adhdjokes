module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@helpers': './src/utils/helpers',
          '@hooks': './src/hooks',
          '@navigator': './src/navigator',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@theme': './src/theme',
          '@types': './src/types',
          '@storage': './src/storage',
          '@store': './src/store',
          '@utils': './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
