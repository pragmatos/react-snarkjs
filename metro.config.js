/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const defaultSourceExts = require("metro-config/src/defaults/defaults").sourceExts;
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules: {
      crypto: require.resolve('react-native-crypto'),
      fs: require.resolve('react-native-fs'),
      path: require.resolve('react-native-path'),
      os: require.resolve('react-native-os'),
      // ffjavascript: 'ffjavascript/main.js',
      // ...aaa,
      // fs: require.resolve('react-native-fs'),
    },
    sourceExts: [
      ...defaultSourceExts,
      'cjs'
    ],
  }
};
