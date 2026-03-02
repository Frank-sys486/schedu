import UserIcon from '@/assets/dashboard/icons/User.svg';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const logoSource = require('@/assets/dashboard/images/S (1) 1.png');

interface SharedHeaderProps {
  showBackButton?: boolean;
  title?: string;
  onBackPress?: () => void;
  rightElement?: React.ReactNode;
}

export const SharedHeader: React.FC<SharedHeaderProps> = ({ 
  showBackButton = false, 
  title = "SCHEDU",
  onBackPress,
  rightElement
}) => {
  const router = useRouter();

  const handleBack = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      router.back();
    }
  };

  return (
    <View style={styles.header}>
      {showBackButton && (
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#b3b3b3" />
        </TouchableOpacity>
      )}
      <Image source={logoSource} style={styles.logo} />
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.rightContainer}>
        {rightElement || <UserIcon width={28} height={30} color="#B3B3B3" />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    backgroundColor: '#fff',
  },
  backButton: {
    marginRight: 10,
  },
  logo: {
    width: 36,
    height: 36,
  },
  headerTitle: {
    fontSize: 33,
    fontWeight: '300',
    color: '#b3b3b3',
    marginLeft: 10,
  },
  rightContainer: {
    marginLeft: 'auto',
  },
});
