export default {
  expo: {
    name: 'stone-challenge',
    slug: 'stone-challenge',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      jsEngine: 'jsc',
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.matheusbc97.stonechallenge',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      eas: {
        projectId: 'f2e15914-9d96-441c-84b1-0e7675f1fd40',
      },
      isDocs: process.env.IS_DOCS === 'true',
    },
  },
};
