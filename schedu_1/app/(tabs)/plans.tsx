import UserIcon from '@/assets/dashboard/icons/User.svg';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const s11 = require('@/assets/dashboard/images/S (1) 1.png');

export default function PlansScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={s11} style={styles.logo} />
          <Text style={styles.headerTitle}>SCHEDU</Text>
          <View style={styles.userIconContainer}>
            <UserIcon width={28} height={30} color="#B3B3B3" />
          </View>
        </View>

        {/* Page Title */}
        <View style={styles.titleRow}>
            <Text style={styles.pageTitle}>Plans</Text>
            <TouchableOpacity>
                <Ionicons name="options-outline" size={24} color="#000" />
            </TouchableOpacity>
        </View>

        {/* Current Section */}
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Current</Text>
            <Ionicons name="chevron-down" size={16} color="#000" />
        </View>

        {/* Plans List */}
        <View style={styles.plansList}>
            {/* Card 1 */}
            <View style={[styles.planCard, { backgroundColor: '#fe76a8' }]}>
                <Text style={styles.subjectCode}>MAT10</Text>
                <Text style={styles.gradeSection}>Grade 10 - Einstein</Text>
            </View>

            {/* Card 2 */}
            <View style={[styles.planCard, { backgroundColor: '#fe76a8' }]}>
                <Text style={styles.subjectCode}>MAT10</Text>
                <Text style={styles.gradeSection}>Grade 10 - Newton</Text>
            </View>

            {/* Card 3 */}
            <View style={[styles.planCard, { backgroundColor: '#5290d9' }]}>
                <Text style={styles.subjectCode}>SCI8</Text>
                <Text style={styles.gradeSection}>Grade 8 - Tesla</Text>
            </View>

            {/* Card 4 */}
            <View style={[styles.planCard, { backgroundColor: '#7a95b4' }]}>
                <Text style={styles.subjectCode}>SCI9</Text>
                <Text style={styles.gradeSection}>Grade 9 - Bohr</Text>
            </View>

            {/* Card 5 */}
            <View style={[styles.planCard, { backgroundColor: '#5290d9' }]}>
                <Text style={styles.subjectCode}>SCI9</Text>
                <Text style={styles.gradeSection}>Grade 9 - Curie</Text>
            </View>
        </View>

        {/* Sections Section */}
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Sections</Text>
            <View style={styles.sectionActions}>
                 <TouchableOpacity>
                    <Ionicons name="options-outline" size={20} color="#000" />
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.plusButton}>
                    <Ionicons name="add" size={20} color="#000" />
                 </TouchableOpacity>
            </View>
        </View>

        {/* Sections List */}
        <View style={styles.sectionsList}>
            <View style={styles.sectionItem}>
                <Text style={styles.sectionItemText}>Grade 8 - Tesla</Text>
            </View>
            <View style={styles.sectionItem}>
                <Text style={styles.sectionItemText}>Grade 9 - Bohr</Text>
            </View>
             <View style={styles.sectionItem}>
                <Text style={styles.sectionItemText}>Grade 9 - Curie</Text>
            </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
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
  userIconContainer: {
    marginLeft: 'auto',
  },
  titleRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 20,
      marginBottom: 10,
  },
  pageTitle: {
      fontSize: 17,
      fontWeight: '600',
      color: '#000',
  },
  sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginBottom: 15,
      marginTop: 10,
      gap: 5,
      justifyContent: 'space-between',
  },
  sectionHeaderText: {
      fontSize: 13,
      color: '#000',
      fontWeight: '500',
  },
  sectionActions: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 15,
  },
  plusButton: {
      //
  },
  plansList: {
      paddingHorizontal: 20,
      gap: 10,
  },
  planCard: {
      borderRadius: 6,
      padding: 15,
      height: 67,
      justifyContent: 'center',
      // Shadow
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
  },
  subjectCode: {
      fontSize: 16,
      fontWeight: '700',
      fontStyle: 'italic',
      color: '#fff',
      marginBottom: 4,
  },
  gradeSection: {
      fontSize: 12,
      color: '#fff',
      fontWeight: '400',
  },
  sectionsList: {
      paddingHorizontal: 20,
      gap: 10,
      marginTop: 5,
  },
  sectionItem: {
      backgroundColor: '#717171',
      borderRadius: 6,
      height: 31,
      justifyContent: 'center',
      paddingHorizontal: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
  },
  sectionItemText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: '400',
  }
});