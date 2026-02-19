import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ChooseInstitution() {
  return (
    <View style={styles.container}>
      {/* Hide the default header so we can build our custom one */}
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Custom Header */}
      <View style={styles.header}>
        {/* Placeholder for Ford logo */}
        <View style={styles.logoPlaceholder} />
        <Text style={styles.headerText}>FORADI</Text>
      </View>
      <View style={styles.divider} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Title & Actions Row */}
        <View style={styles.titleRow}>
          <Text style={styles.pageTitle}>Choose Institution</Text>
          <View style={styles.actions}>
             <Ionicons name="search-outline" size={24} color="black" style={styles.icon} />
             <Ionicons name="options-outline" size={24} color="black" style={styles.icon} />
             <Ionicons name="person-circle-outline" size={28} color="black" style={styles.icon} />
          </View>
        </View>

        {/* Filter Bar */}
        <View style={styles.filterBar}>
          <View style={styles.filterLeft}>
            <Text style={styles.filterText}>All</Text>
            <Ionicons name="chevron-down" size={20} color="black" />
          </View>
          <TouchableOpacity>
            <Ionicons name="add-circle-outline" size={32} color="black" />
          </TouchableOpacity>
        </View>

        {/* Cards Container */}
        <View style={styles.cardContainer}>
          {/* Card 1: Hephzibah School */}
          <View style={styles.card}>
            <View style={styles.imagePlaceholder}>
                <Text style={styles.placeholderText}>Image Placeholder</Text>
            </View>
            <Text style={styles.cardTitle}>Hephzibah School Inc.</Text>
          </View>

          {/* Card 2: Adventist University */}
          <View style={styles.card}>
            <View style={styles.imagePlaceholder}>
                <Text style={styles.placeholderText}>Image Placeholder</Text>
            </View>
            <Text style={styles.cardTitle}>Adventist University of the Philippines</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50, // Safe area for status bar
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15,
  },
  logoPlaceholder: {
    width: 30,
    height: 30,
    backgroundColor: '#ccc',
    borderRadius: 15,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '300',
    letterSpacing: 2,
    color: '#B3B3B3',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    width: '100%',
  },
  scrollContent: {
    padding: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
  },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  filterLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    fontSize: 18,
    marginRight: 5,
  },
  cardContainer: {
    gap: 20,
  },
  card: {
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  placeholderText: {
    color: '#888',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 10,
  },
});