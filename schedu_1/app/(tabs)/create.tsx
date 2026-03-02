import { Redirect } from 'expo-router';
import React from 'react';

export default function CreateScreen() {
  // This screen is a placeholder for the Tab Bar item.
  // The actual interaction is handled via listeners in _layout.tsx
  return <Redirect href="/(tabs)" />;
}
