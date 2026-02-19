import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import { useTheme } from '@/hooks/use-theme';

export default function Create() {
  const colorScheme = useColorScheme();
  const theme = useTheme();

  const onRectangleClick = () => {
    // Handle create action
  };

  return (
    <View style={styles.create}>
      <View style={styles.createChild} />
      <TouchableOpacity style={styles.createItem} onPress={onRectangleClick}>
        <View style={styles.createInner} />
        <View style={styles.rectangleDiv} />
        <View style={styles.createChild2} />
        <Text style={styles.subject}>Subject</Text>
        <View style={styles.book}>
          <Image source={require('@/assets/images/Book open.svg')} style={styles.icon} />
        </View>
        <Text style={styles.notes}>Notes</Text>
        <View style={styles.penTool}>
          <Image source={require('@/assets/images/Icon-1.svg')} style={styles.icon2} />
        </View>
        <Text style={styles.lessonplan}>Lessonplan</Text>
        <View style={styles.table}>
          <Image source={require('@/assets/images/Icon-2.svg')} style={styles.icon3} />
        </View>
        <Text style={styles.activities}>Activities</Text>
        <View style={styles.box}>
          <Image source={require('@/assets/images/Icon-3.svg')} style={styles.icon4} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  create: {
    width: 390,
    height: 844,
    position: 'relative',
    backgroundColor: '#fff',
    overflow: 'hidden',
    maxWidth: '100%',
    maxHeight: '100%',
    textAlign: 'center',
    fontSize: 11,
    color: '#43553c',
    fontFamily: Inter,
  },
  createChild: {
    position: 'absolute',
    top: 631,
    left: 1,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
    borderRadius: 17,
    backgroundColor: '#fff',
    width: 390,
    height: 104,
    flexShrink: 0,
  },
  createItem: {
    position: 'absolute',
    top: 647,
    left: 15,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.34,
    shadowRadius: 4,
    borderRadius: 16,
    backgroundColor: '#8ebda7',
    width: 82,
    height: 71,
    opacity: 0.3,
    cursor: 'pointer',
    flexShrink: 0,
  },
  createInner: {
    position: 'absolute',
    top: 647,
    left: 107,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.34,
    shadowRadius: 4,
    borderRadius: 16,
    backgroundColor: '#9bd882',
    width: 82,
    height: 71,
    opacity: 0.3,
    cursor: 'pointer',
    flexShrink: 0,
  },
  rectangleDiv: {
    position: 'absolute',
    top: 647,
    left: 201,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.34,
    shadowRadius: 4,
    borderRadius: 16,
    backgroundColor: '#7ed957',
    width: 82,
    height: 71,
    opacity: 0.3,
    cursor: 'pointer',
    flexShrink: 0,
  },
  createChild2: {
    position: 'absolute',
    top: 647,
    left: 293,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.34,
    shadowRadius: 4,
    borderRadius: 16,
    backgroundColor: '#86b472',
    width: 82,
    height: 71,
    opacity: 0.3,
    cursor: 'pointer',
    flexShrink: 0,
  },
  subject: {
    position: 'absolute',
    top: 687,
    left: 116,
    lineHeight: 22,
    display: 'inline-block',
    width: 63,
    height: 22,
    flexShrink: 0,
  },
  book: {
    position: 'absolute',
    top: 664,
    left: 137,
    width: 20,
    height: 20,
    overflow: 'hidden',
    flexShrink: 0,
  },
  icon: {
    position: 'absolute',
    height: '83.5%',
    width: '66.5%',
    top: '8.33%',
    right: '16.83%',
    bottom: '8.17%',
    left: '16.67%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  notes: {
    position: 'absolute',
    top: 687,
    left: 208,
    lineHeight: 22,
    color: 'rgba(0, 0, 0, 0.65)',
    display: 'inline-block',
    width: 68,
    height: 23,
    flexShrink: 0,
  },
  penTool: {
    position: 'absolute',
    top: 664,
    left: 232,
    width: 20,
    height: 20,
    overflow: 'hidden',
    flexShrink: 0,
  },
  icon2: {
    position: 'absolute',
    height: '83.5%',
    width: '83.5%',
    top: '8.33%',
    right: '8.17%',
    bottom: '8.17%',
    left: '8.33%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  lessonplan: {
    position: 'absolute',
    top: 687,
    left: -7,
    lineHeight: 22,
    color: '#3f594d',
    display: 'inline-block',
    width: 125,
    height: 23,
    flexShrink: 0,
  },
  table: {
    position: 'absolute',
    top: 664,
    left: 46,
    width: 20,
    height: 20,
    overflow: 'hidden',
    flexShrink: 0,
  },
  icon3: {
    position: 'absolute',
    height: '75%',
    width: '75%',
    top: '12.5%',
    right: '12.5%',
    bottom: '12.5%',
    left: '12.5%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
  activities: {
    position: 'absolute',
    top: 687,
    left: 270,
    lineHeight: 22,
    color: '#3a4138',
    display: 'inline-block',
    width: 128,
    height: 23,
    flexShrink: 0,
  },
  box: {
    position: 'absolute',
    top: 664,
    left: 324,
    width: 20,
    height: 20,
    overflow: 'hidden',
    flexShrink: 0,
  },
  icon4: {
    position: 'absolute',
    height: '83.5%',
    width: '75%',
    top: '8.34%',
    right: '12.5%',
    bottom: '8.16%',
    left: '12.5%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
  },
});