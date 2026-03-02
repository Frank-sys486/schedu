import ArrowDropDownIcon from '@/assets/icons/arrow_drop_down.svg';
import BookOpenIcon from '@/assets/icons/Book open.svg';
import BookmarkIcon from '@/assets/icons/Bookmark.svg';
import CalendarIcon from '@/assets/icons/Calendar.svg';
import HomeIcon from '@/assets/icons/Home.svg';
import PlusIcon from '@/assets/icons/Plus.svg';
import SearchIcon from '@/assets/icons/Search.svg';
import SlidersIcon from '@/assets/icons/Sliders.svg';
import UserIcon from '@/assets/icons/User.svg';
import { Stack } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ChooseSubject() {
  const onPlusContainerClick = () => {
    // Add your code here
  };

  return (
    <View style={styles.container}>
      {/* Hide the default header so we can build our custom one */}
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Custom Header */}
      <View style={styles.header}>
        <Image source={require('../assets/images/ford-2 2.png')} style={styles.logo} />
        <Text style={styles.headerText}>FORADI</Text>
        <View style={styles.user}>
            <UserIcon width={28} height={28} color="black" />
        </View>
      </View>
      <View style={styles.divider} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Title & Actions Row */}
        <View style={styles.titleRow}>
          <Text style={styles.pageTitle}>Choose Subject</Text>
          <View style={styles.actions}>
             <SearchIcon width={24} height={24} color="black" style={styles.icon} />
             <SlidersIcon width={24} height={24} color="black" style={styles.icon} />
             <TouchableOpacity onPress={onPlusContainerClick}>
                <PlusIcon width={32} height={32} color="black" style={styles.icon} />
             </TouchableOpacity>
          </View>
        </View>

        {/* Filter Bar */}
        <View style={styles.filterBar}>
          <View style={styles.filterLeft}>
            <Text style={styles.filterText}>All</Text>
            <ArrowDropDownIcon width={20} height={20} color="black" />
          </View>
        </View>

        {/* Cards Container */}
        <View style={styles.cardContainer}>
            <View style={[styles.card, {backgroundColor: '#fe76a8'}]}>
                <Image source={require('../assets/images/image 1.png')} style={styles.cardImage} />
                <Text style={styles.cardTitle}>SCI9 - Science</Text>
                <Text style={styles.cardSubTitle}>Hephzibah School Inc.</Text>
            </View>
            <View style={[styles.card, {backgroundColor: '#5290d9'}]}>
                <Image source={require('../assets/images/image 2.png')} style={styles.cardImage} />
                <Text style={styles.cardTitle}>MAT10 - Mathematics</Text>
                <Text style={styles.cardSubTitle}>Hephzibah School Inc.</Text>
            </View>
            <View style={[styles.card, {backgroundColor: '#7a95b4'}]}>
                <Image source={require('../assets/images/image 3.png')} style={styles.cardImage} />
                <Text style={styles.cardTitle}>SCI8 - Science</Text>
                <Text style={styles.cardSubTitle}>Hephzibah School Inc.</Text>
            </View>
            <View style={[styles.card, {backgroundColor: '#e6e6e6'}]}>
                 <Image source={require('../assets/images/image 4.png')} style={styles.cardImage} />
                <Text style={styles.cardTitle}>MAT10 - Mathematics</Text>
                <Text style={styles.cardSubTitle}>Adventist University of the Philippines</Text>
            </View>
        </View>
      </ScrollView>
      
      {/* Bottom Nav */}
      <View style={styles.nav}>
        <View style={styles.navigationButtonList}>
            <TouchableOpacity style={styles.navigationButton}>
                <HomeIcon width={24} height={24} color="#757575" />
                <Text style={styles.label}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigationButton}>
                <CalendarIcon width={24} height={24} color="#757575" />
                <Text style={styles.label}>Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigationButton}>
                <PlusIcon width={24} height={24} color="#757575" />
                <Text style={styles.label}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigationButton}>
                <BookOpenIcon width={24} height={24} color="#2c2c2c" />
                <Text style={[styles.label, {color: '#2c2c2c'}]}>Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigationButton}>
                <BookmarkIcon width={24} height={24} color="#757575" />
                <Text style={styles.label}>Plans</Text>
            </TouchableOpacity>
        </View>
      </View>
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
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  logo: {
      width: 39,
      height: 39,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '300',
    letterSpacing: 2,
    color: '#B3B3B3',
  },
  user: {
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
    borderRadius: 6,
    padding: 15,
    alignItems: 'center',
  },
  cardImage: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  cardSubTitle: {
    fontSize: 12,
    fontWeight: '300',
    color: '#fff',
  },
  nav: {
    borderTopWidth: 1,
    borderTopColor: '#d9d9d9',
    backgroundColor: '#fff',
  },
  navigationButtonList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
  },
  navigationButton: {
    alignItems: 'center',
  },
  label: {
      fontSize: 12,
      color: '#757575',
  }
});