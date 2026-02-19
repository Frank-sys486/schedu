import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import Battery from '@/components/svg/Battery';
import CellularConnection from '@/components/svg/CellularConnection';
import Wifi from '@/components/svg/Wifi';
import Ellipse4 from '@/components/svg/Ellipse4';
import ImageComponent from '@/components/svg/ImageComponent';

const { width, height } = Dimensions.get('window');

export default function RegisterStep2Screen() {
  const onRegisterClick = () => {
    // For now, navigate back to login after registration
    router.replace('/(auth)');
  };

  return (
    <View style={styles.register}>
      <View style={styles.ios}>
        <View style={styles.statusBarIphone}>
          <Text style={styles.time2}>9:41</Text>
          <View style={styles.levels}>
            <CellularConnection style={styles.cellularConnectionIcon} />
            <Wifi style={styles.wifiIcon} />
            <Battery style={styles.battery} />
          </View>
        </View>
      </View>
      <View style={styles.formRegisterWrapper}>
        <View style={styles.formRegister}>
          <View style={styles.inputField}>
            <View style={styles.input}>
              <TextInput style={styles.value} placeholder="Username" />
            </View>
          </View>
          <View style={styles.inputField2}>
            <View style={styles.input2}>
              <TextInput style={styles.value} placeholder="First Name" />
            </View>
          </View>
          <View style={styles.inputField3}>
            <View style={styles.input3}>
              <TextInput style={styles.value} placeholder="Last Name" />
            </View>
          </View>
          <TouchableOpacity style={styles.buttonGroup} onPress={onRegisterClick}>
            <View style={styles.button}>
              <Text style={styles.button2}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.registerChild}>
        <Ellipse4 style={styles.ellipse4} />
      </View>
      <View style={styles.image}>
        <ImageComponent style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  register: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: '#fff',
    overflow: 'hidden',
    alignItems: 'center',
  },
  ios: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
  },
  statusBarIphone: {
    position: 'absolute',
    top: 0,
    left: 5,
    width: 390,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 19,
  },
  time2: {
    lineHeight: 22,
    fontWeight: '600',
    color: '#000',
    fontSize: 17,
  },
  levels: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  cellularConnectionIcon: {
    height: 12.2,
    width: 19.2,
  },
  wifiIcon: {
    height: 12.3,
    width: 17.1,
  },
  battery: {
    height: 13,
    width: 27.3,
  },
  formRegisterWrapper: {
    position: 'absolute',
    top: 363,
    left: (width / 2) - (320 / 2),
    width: 320,
    height: 278,
  },
  formRegister: {
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d9d9d9',
    height: 278,
    padding: 24,
    gap: 24,
  },
  inputField: {
    alignSelf: 'stretch',
  },
  input: {
    alignSelf: 'stretch',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  value: {
    flex: 1,
    lineHeight: 100 * 16 / 100,
    fontSize: 16,
    color: '#b3b3b3',
  },
  inputField2: {
    alignSelf: 'stretch',
    gap: 8,
  },
  input2: {
    alignSelf: 'stretch',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  inputField3: {
    width: 272,
    flex: 1,
  },
  input3: {
    alignSelf: 'stretch',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  buttonGroup: {
    alignSelf: 'stretch',
  },
  button: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#7ed957',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  button2: {
    lineHeight: 100 * 16 / 100,
    fontSize: 16,
    color: '#f5f5f5',
  },
  registerChild: {
    position: 'absolute',
    top: 132,
    left: (width / 2) - (195 / 2), // Centering the ellipse
    width: 195,
    height: 195,
  },
  ellipse4: {
    width: '100%',
    height: '100%',
  },
  image: {
    position: 'absolute',
    top: 194,
    left: (width / 2) - (48 / 2), // Centering the image icon
    width: 48,
    height: 48,
    overflow: 'hidden',
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});
