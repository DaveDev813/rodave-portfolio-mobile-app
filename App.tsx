import React from 'react';
import { WebView } from 'react-native';

export default function App() {
  return (
    <WebView
      useWebKit
      source={{ uri: 'https://rodave-dev.web.app/' }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      scalesPageToFit={true}
    />
  );
}
