import React from 'react';
// import { WebView } from 'react-native';
import OfflineCacheWebView from 'react-native-offline-cache-webview';

export default function App() {
  return (
    <OfflineCacheWebView
      useWebKit
      source={{ uri: 'https://rodave-dev.web.app/' }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      scalesPageToFit={true}
    />
  );
}
