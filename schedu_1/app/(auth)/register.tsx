import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegisterScreen() {
  const [step, setStep] = useState(1);

  const onAlreadyHaveAnClick = () => {
    router.back();
  };

  const onContinueClick = () => {
    if (step === 1) {
      setStep(2);
    } else {
      console.log('Registration Completed');
      // Add logic to submit data to backend here
    }
  };

  return (
    <View style={styles.register}>
      <View style={styles.logoSet}>
        <Text style={styles.foradi}>SCHEDU</Text>
        <Text style={styles.smarterLessonPlanning}>Smarter Lesson Planning</Text>
      </View>
      <View style={styles.formRegister}>
        {step === 1 ? (
          <>
            <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#b3b3b3" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#b3b3b3" />
            <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry placeholderTextColor="#b3b3b3" />
          </>
        ) : (
          <>
            <View style={styles.avatarContainer}>
              <View style={styles.avatarPlaceholder}>
                <Text style={styles.avatarPlaceholderText}>+</Text>
              </View>
              <Text style={styles.uploadText}>Upload Profile Picture</Text>
            </View>
            <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#b3b3b3" />
            <TextInput style={styles.input} placeholder="First Name" placeholderTextColor="#b3b3b3" />
            <TextInput style={styles.input} placeholder="Last Name" placeholderTextColor="#b3b3b3" />
          </>
        )}
        <TouchableOpacity style={styles.button} onPress={onContinueClick}>
          <Text style={styles.buttonText}>{step === 1 ? 'Continue' : 'Sign Up'}</Text>
        </TouchableOpacity>
      </View>
      {step === 1 && (
        <>
          <View style={styles.separator}>
            <View style={styles.line} />
            <Text style={styles.or}>or</Text>
          </View>
          <View style={styles.continueWith}>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>Continue with Apple</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      <TouchableOpacity onPress={onAlreadyHaveAnClick}>
        <Text style={styles.alreadyHaveAnContainer}>
          Already have an Account? <Text style={styles.login}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  register: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoSet: {
    alignItems: 'center',
    marginBottom: 40,
  },
  foradi: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#b6b6b6',
  },
  smarterLessonPlanning: {
    fontSize: 14,
    color: '#a6a6a6',
  },
  formRegister: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 8,
    padding: 24,
    marginBottom: 20,
    gap: 16,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#b3b3b3',
  },
  button: {
    backgroundColor: '#7ed957',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  separator: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  line: {
    width: '80%',
    height: 1,
    backgroundColor: '#d9d9d9',
    position: 'absolute',
    top: '50%',
  },
  or: {
    fontSize: 14,
    fontWeight: '200',
    color: '#000',
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
  continueWith: {
    width: '100%',
    gap: 10,
    marginBottom: 20,
  },
  socialButton: {
    width: '100%',
    height: 43,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButtonText: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  alreadyHaveAnContainer: {
    textAlign: 'center',
    color: '#b3b3b3',
  },
  login: {
    color: '#757575',
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d9d9d9',
    marginBottom: 8,
  },
  avatarPlaceholderText: {
    fontSize: 30,
    color: '#b3b3b3',
    fontWeight: '200',
  },
  uploadText: {
    fontSize: 14,
    color: '#b3b3b3',
  },
});
