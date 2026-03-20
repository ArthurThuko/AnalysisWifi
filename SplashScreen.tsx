import React from 'react';
import { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

export default function Splash({ onFinish }: { onFinish: () => void }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true
      })
    ]).start(() => {
      setTimeout(() => {
        onFinish();
      }, 800);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./assets/Logo-AnalysisWifi.png')}
        style={[
          styles.logo,
          {
            opacity,
            transform: [{ scale }]
          }
        ]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1F44',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 200
  }
});