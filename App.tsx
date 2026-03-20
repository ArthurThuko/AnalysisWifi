import { useEffect, useState } from 'react';
import Splash from './SplashScreen';
import Home from './app/index';
import React from 'react';
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    async function prepare() {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAppReady(true);
    }

    prepare();
  }, []);

  if (!appReady) {
    return null;
  }

  if (showSplash) {
    return (
      <Splash
        onFinish={async () => {
          setShowSplash(false);
          await SplashScreen.hideAsync();
        }}
      />
    );
  }

  return Home();
}