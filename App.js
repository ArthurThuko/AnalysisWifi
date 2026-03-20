import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Splash from './SplashScreen';
import { View, Text } from 'react-native';
import Home from './app/index';

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