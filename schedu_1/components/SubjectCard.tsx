import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface SubjectCardProps {
  code: string;
  title: string;
  institution: string;
  color: string;
  image: any;
  onPress: () => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ 
  code, 
  title, 
  institution, 
  color, 
  image, 
  onPress 
}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={[styles.cardImageContainer, { backgroundColor: color }]}>
        <Image source={image} style={styles.cardImage} resizeMode="contain" />
      </View>
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{code} <Text style={styles.cardTitleLight}>- {title}</Text></Text>
        <Text style={styles.cardSubtitle}>{institution}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '48%',
    marginBottom: 20,
  },
  cardImageContainer: {
    height: 225,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: 110,
    height: 110,
  },
  cardTextContainer: {
    paddingHorizontal: 5,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
  },
  cardTitleLight: {
    fontWeight: '300',
  },
  cardSubtitle: {
    fontSize: 8,
    fontWeight: '300',
    color: '#000',
    marginTop: 2,
  },
});
