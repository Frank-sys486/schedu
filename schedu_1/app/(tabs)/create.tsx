import { Redirect } from 'expo-router';
import React from 'react';

export default function CreateScreen() {
  // This screen is a placeholder for the Tab Bar item.
  // If navigated to directly, redirect to the home tab.
  return <Redirect href="/(tabs)" />;
}
