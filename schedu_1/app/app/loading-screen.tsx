import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      {/* Hide the header to make it look like a splash screen */}
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Logo Placeholder (Replaces img className={styles.ford21Icon}) */}
      <View style={styles.logoPlaceholder}>
        <Text style={styles.placeholderText}>Logo</Text>
      </View>
      
      {/* Brand Text (Replaces div className={styles.foradi}) */}
      <Text style={styles.brandText}>FORADI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background
    alignItems: 'center',       // Center horizontally
    justifyContent: 'center',   // Center vertically
  },
  logoPlaceholder: {
    width: 276,                 // Exact size from CSS (.ford21Icon)
    height: 276,
    backgroundColor: '#E0E0E0', // Gray placeholder color
    borderRadius: 20,
    marginBottom: 0,            // CSS shows Top: 513px (Text) - (237px Top + 276px Height) = 0px gap
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#888',
  },
  brandText: {
    fontSize: 51,               // Exact size from CSS (.foradi)
    fontWeight: '300',          // "Light" weight from CSS
    color: '#B3B3B3',           // Exact hex code from CSS
    letterSpacing: 0,           // CSS didn't specify letter-spacing, resetting default
  },
});