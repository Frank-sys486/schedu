import { Image } from 'expo-image';
import { ActivityIndicator, Button, Modal, Platform, StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import TextRecognition from '@react-native-ml-kit/text-recognition';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Link, router } from 'expo-router';
import { useRef, useState } from 'react';

export default function HomeScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraVisible, setCameraVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [extractedText, setExtractedText] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);

  const handleScanPress = async () => {
    if (!permission?.granted) {
      const { granted } = await requestPermission();
      if (!granted) {
        alert('Camera permission is required to scan text.');
        return;
      }
    }
    setCameraVisible(true);
  };

  const handleCapture = async () => {
    if (cameraRef.current) {
      setLoading(true);
      try {
        // 1. Capture the image
        const photo = await cameraRef.current.takePictureAsync({
          quality: 1, // High quality for better OCR
          base64: false,
          exif: false,
        });

        if (photo?.uri) {
          // 2. Process with ML Kit
          // This runs natively on Android to extract text even from complex backgrounds
          const result = await TextRecognition.recognize(photo.uri);
          
          // 3. Save the raw text
          setExtractedText(result.text);
          setCameraVisible(false);
        }
      } catch (e: any) {
        console.error("OCR Failed:", e);
        if (e.message?.includes("doesn't seem to be linked")) {
          alert("Setup Error: You are running in Expo Go.\n\nPlease open the custom development build (app named 'schedu_1') created by 'npx expo run:android'.");
        } else {
          alert("Failed to extract text.");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Step 2: Explore</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>

      {/* Navigation Demo */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Figma Conversion Demo</ThemedText>
        <Button title="View Loading Screen" onPress={() => router.push('/loading-screen')} />
        <Button title="conversion from figact" onPress={() => router.push('/dashboard')} />
        <Button title="manual conversion" onPress={() => router.push('/manual-dashboard')} />
      </ThemedView>

      {/* OCR Section */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Camera OCR Demo</ThemedText>
        <Button title="Scan Table of Contents" onPress={handleScanPress} />
        
        {extractedText && (
          <ThemedView style={{ marginTop: 10, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
            <ThemedText type="defaultSemiBold">Raw Extracted Text:</ThemedText>
            <ThemedText style={{ fontSize: 12, fontFamily: 'monospace' }}>{extractedText}</ThemedText>
          </ThemedView>
        )}
      </ThemedView>

      {/* Camera Modal */}
      <Modal visible={cameraVisible} animationType="slide" onRequestClose={() => setCameraVisible(false)}>
        <View style={{ flex: 1 }}>
          <CameraView 
            style={{ flex: 1 }} 
            ref={cameraRef}
            facing="back"
          >
            <View style={styles.cameraOverlay}>
              <View style={styles.buttonContainer}>
                <Button title="Cancel" color="red" onPress={() => setCameraVisible(false)} />
                {loading ? (
                  <ActivityIndicator size="large" color="#fff" />
                ) : (
                  <Button title="Capture & Read" onPress={handleCapture} />
                )}
              </View>
            </View>
          </CameraView>
        </View>
      </Modal>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  cameraOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
