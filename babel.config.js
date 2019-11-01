module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  'plugins': [
    ['module-resolver', {
      'root': ['./'],
      'alias': {
        'AppUtils': './app/utils/AppUtils.js',
        'Styles': './app/theme/index.js',
        'AppImages': './app/assets/images/index.js',
        'Colors': './app/theme/Colors.js',
        'InputField': './app/common/InputField.js',
        'ReduxActions': './app/redux/actions.js',
        'ReduxStore': './app/redux/store.js',
        'Toast': './app/common/Toast.js',
        'withToast': './app/action/withToast.js',
        'withGreeting': './app/action/withGreeting.js',
      },
    }],
  ],
};
