import { router } from 'expo-router';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const onDontHaveAnClick = () => {
    router.push('/(auth)/register');
  };

  const onSignInClick = () => {
    // Add your sign in logic here
    console.log('[LoginScreen] Sign In Clicked. Attempting navigation to /(tabs)...');
    router.replace('/(tabs)');
  };

  const onGoogleSignIn = () => {
    console.log('Continue with Google');
  };

  const onAppleSignIn = () => {
    console.log('Continue with Apple');
  };

  const onForgotPassword = () => {
    console.log('Forgot password?');
  };

  return (
    <View style={styles.login}>
      <View style={styles.logoSet}>
        <Image
          style={styles.ford22Icon}
          resizeMode="contain"
          source={require('@/assets/images/source-ford-2-2.png')} // Assuming this is the ford22Icon
        />
        <Text style={styles.schedu}>SCHEDU</Text>
        <Text style={styles.smarterLessonPlanning}>Smarter Lesson Planning</Text>
      </View>
      <View style={styles.formLogIn}>
        <View style={styles.inputField}>
          <View style={styles.input}>
            <TextInput style={styles.value} placeholder="Username or email" />
          </View>
        </View>
        <View style={styles.inputField}>
          <View style={styles.input}>
            <TextInput style={styles.value} placeholder="Password" secureTextEntry />
          </View>
        </View>
        <TouchableOpacity style={styles.buttonGroup} onPress={onSignInClick}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onForgotPassword}>
          <Text style={styles.textLink2}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separator}>
          <View style={styles.line} />
          <Text style={styles.or}>or</Text>
        </View>
      <View style={styles.continueWith}>
        <View style={styles.googleapple}>
          <TouchableOpacity style={styles.google} onPress={onGoogleSignIn}>
            <Text style={styles.continueWithGoogle}>Continue with Google</Text>
            <View style={styles.googleChild} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.apple} onPress={onAppleSignIn}>
            <Text style={styles.continueWithGoogle}>Continue with Apple</Text>
            <View style={styles.googleChild} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={onDontHaveAnClick}>
        <Text style={styles.dontHaveAnContainer}>
          Dont have an Account? <Text style={styles.register}>Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoSet: {
    alignItems: 'center',
    marginBottom: 40,
  },
  ford22Icon: {
    width: 69,
    height: 69,
  },
  schedu: {
    fontSize: 35,
    lineHeight: 22,
    color: '#b6b6b6',
    fontWeight: 'bold',
  },
  smarterLessonPlanning: {
    fontSize: 14,
    lineHeight: 140 * 14 / 100,
    color: '#a6a6a6',
    textAlign: 'center', // Changed from left to center for better general layout
  },
  continueWith: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  googleapple: {
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  google: {
    width: '100%',
    height: 43,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  continueWithGoogle: {
    fontSize: 14,
    lineHeight: 140 * 14 / 100,
    color: '#b3b3b3',
  },
  googleChild: {
    display: 'none',
  },
  apple: {
    width: '100%',
    height: 43,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  line: {
    width: '80%', // Adjust as needed
    height: 1,
    backgroundColor: '#d9d9d9',
    position: 'absolute',
    top: '50%',
  },
  or: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '200',
    color: '#000',
    backgroundColor: '#fff', // To hide the line behind it
    paddingHorizontal: 5,
  },
  dontHaveAnContainer: {
    fontSize: 14,
    lineHeight: 140 * 14 / 100,
    textAlign: 'center',
    color: '#b3b3b3',
    marginBottom: 20,
  },
  register: {
    color: '#757575',
    fontWeight: 'bold',
  },
  formLogIn: {
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    backgroundColor: '#fff',
    padding: 24,
    gap: 24,
    marginBottom: 20,
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
  buttonText: {
    lineHeight: 100 * 16 / 100,
    fontSize: 16,
    color: '#f5f5f5',
  },
  textLink2: {
    alignSelf: 'stretch',
    fontSize: 14,
    lineHeight: 140 * 14 / 100,
    color: '#757575',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 10,
  },
  s11: {
    width: 55,
    height: 55,
  },
});
