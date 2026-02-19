import UserIcon from '@/assets/dashboard/icons/User.svg';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, LayoutAnimation, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, UIManager, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const s11 = require('@/assets/dashboard/images/S (1) 1.png');
const ford22 = require('@/assets/dashboard/images/ford-2 2.png');
// Using the same image asset pattern as choose-subject.tsx
const bannerImage = require('@/assets/images/image 4.png'); 
const image1 = require('@/assets/images/image 1.png');
const image2 = require('@/assets/images/image 2.png');
const image3 = require('@/assets/images/image 3.png');

export default function LibraryScreen() {
  const [selectedSubject, setSelectedSubject] = useState<any>(null);

  const openSubject = (subject: any) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedSubject(subject);
  };

  const closeSubject = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedSubject(null);
  };

  if (selectedSubject) {
    return <SubjectDetails subject={selectedSubject} onClose={closeSubject} />;
  }

  return <SubjectList onSelect={openSubject} />;
}

function SubjectList({ onSelect }: { onSelect: (subject: any) => void }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.listHeader}>
            <Image source={ford22} style={styles.fordLogo} />
            <Text style={styles.foradiText}>FORADI</Text>
        </View>
        <View style={styles.divider} />

        {/* Title & Actions */}
        <View style={styles.titleRow}>
            <Text style={styles.pageTitle}>Library</Text>
            <View style={styles.actions}>
                <Ionicons name="search-outline" size={24} color="#000" style={styles.icon} />
                <View style={styles.userIconWrapper}>
                     <UserIcon width={24} height={24} color="#000" />
                </View>
                <Ionicons name="options-outline" size={24} color="#000" style={styles.icon} />
            </View>
        </View>

        {/* Filter */}
        <View style={styles.filterRow}>
            <Text style={styles.filterText}>Current</Text>
            <Ionicons name="chevron-down" size={16} color="#000" />
        </View>

        {/* Grid */}
        <View style={styles.grid}>
            {/* Card 1 */}
            <TouchableOpacity style={styles.cardContainer} onPress={() => onSelect({ code: 'MAT10', title: 'Mathematics' })}>
                <View style={[styles.cardImageContainer, { backgroundColor: '#fe76a8' }]}>
                    <Image source={image1} style={styles.cardImage} resizeMode="contain" />
                </View>
                <View style={styles.cardTextContainer}>
                    <Text style={styles.cardTitle}>MAT10 <Text style={styles.cardTitleLight}>- Mathematics</Text></Text>
                    <Text style={styles.cardSubtitle}>Hephzibah School Inc.</Text>
                </View>
            </TouchableOpacity>

            {/* Card 2 */}
            <TouchableOpacity style={styles.cardContainer} onPress={() => onSelect({ code: 'SCI9', title: 'Science' })}>
                <View style={[styles.cardImageContainer, { backgroundColor: '#5290d9' }]}>
                    <Image source={image2} style={styles.cardImage} resizeMode="contain" />
                </View>
                <View style={styles.cardTextContainer}>
                    <Text style={styles.cardTitle}>SCI9 <Text style={styles.cardTitleLight}>- Science</Text></Text>
                    <Text style={styles.cardSubtitle}>Hephzibah School Inc.</Text>
                </View>
            </TouchableOpacity>

            {/* Card 3 */}
            <TouchableOpacity style={styles.cardContainer} onPress={() => onSelect({ code: 'SCI8', title: 'Science' })}>
                <View style={[styles.cardImageContainer, { backgroundColor: '#7a95b4' }]}>
                    <Image source={image3} style={styles.cardImage} resizeMode="contain" />
                </View>
                <View style={styles.cardTextContainer}>
                    <Text style={styles.cardTitle}>SCI8 <Text style={styles.cardTitleLight}>- Science</Text></Text>
                    <Text style={styles.cardSubtitle}>Hephzibah School Inc.</Text>
                </View>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SubjectDetails({ subject, onClose }: { subject: any, onClose: () => void }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.backButton}>
             <Ionicons name="chevron-back" size={24} color="#b3b3b3" />
          </TouchableOpacity>
          <Image source={s11} style={styles.logo} />
          <Text style={styles.headerTitle}>SCHEDU</Text>
          <View style={styles.userIconContainer}>
            <UserIcon width={28} height={30} color="#B3B3B3" />
          </View>
        </View>

        {/* Subject Info */}
        <View style={styles.subjectHeader}>
            <Text style={styles.academicYear}>A.Y. 2025 - 2026</Text>
            <Text style={styles.subjectTitle}>
                <Text style={styles.subjectCode}>{subject.code} </Text>
                - {subject.title}
            </Text>
        </View>

        {/* Banner Card */}
        <View style={styles.bannerCard}>
            {/* The reference has a blue card with an image inside */}
            <Image source={bannerImage} style={styles.bannerImage} resizeMode="cover" />
        </View>

        {/* Notes / Chapters Section */}
        <View style={styles.sectionContainer}>
            <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>Notes</Text>
                <TouchableOpacity style={styles.addButton}>
                    <Ionicons name="add" size={16} color="#757575" />
                </TouchableOpacity>
            </View>
            
            {/* Chapter List */}
            <View style={styles.chapterList}>
                <TouchableOpacity style={styles.chapterItem}>
                    <View style={styles.chapterContent}>
                        <Text style={styles.chapterTitle}>Chapter 1</Text>
                        <Text style={styles.chapterSubtitle}> - The Human Body</Text>
                    </View>
                    <View style={styles.chapterActions}>
                        <Ionicons name="chevron-down" size={20} color="#757575" />
                        <Ionicons name="ellipsis-horizontal" size={20} color="#757575" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.chapterItem}>
                    <View style={styles.chapterContent}>
                        <Text style={styles.chapterTitle}>Chapter 2</Text>
                        <Text style={styles.chapterSubtitle}> - Anatomy of Plants</Text>
                    </View>
                    <View style={styles.chapterActions}>
                        <Ionicons name="chevron-down" size={20} color="#757575" />
                        <Ionicons name="ellipsis-horizontal" size={20} color="#757575" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.chapterItem}>
                    <View style={styles.chapterContent}>
                        <Text style={styles.chapterTitle}>Chapter 3</Text>
                        <Text style={styles.chapterSubtitle}> - Plants and Animals</Text>
                    </View>
                    <View style={styles.chapterActions}>
                        <Ionicons name="chevron-down" size={20} color="#757575" />
                        <Ionicons name="ellipsis-horizontal" size={20} color="#757575" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>

        {/* Two Column Layout: Written Work & Performance Task */}
        <View style={styles.columnsContainer}>
            {/* Left Column: Written Work */}
            <View style={styles.column}>
                <View style={styles.columnHeader}>
                    <Text style={styles.columnTitle}>Written Work</Text>
                    <TouchableOpacity style={styles.addButtonSmall}>
                       <Ionicons name="add" size={14} color="#757575" /> 
                    </TouchableOpacity>
                </View>
                
                <View style={styles.tasksList}>
                    <View style={[styles.taskItem, { backgroundColor: '#e4e7f2' }]}>
                        <Text style={styles.taskText}>Seatwork 1</Text>
                    </View>
                    <View style={[styles.taskItem, { backgroundColor: '#e4e7f2' }]}>
                        <Text style={styles.taskText}>Seatwork 2</Text>
                    </View>
                    <View style={[styles.taskItem, { backgroundColor: '#e4e7f2' }]}>
                        <Text style={styles.taskText}>Seatwork 3</Text>
                    </View>
                    <View style={[styles.taskItem, { backgroundColor: '#d9e2ff' }]}>
                        <Text style={styles.taskText}>Quiz 1</Text>
                    </View>
                    <View style={[styles.taskItem, { backgroundColor: '#d9e2ff' }]}>
                        <Text style={styles.taskText}>Quiz 2</Text>
                    </View>
                </View>
            </View>

            {/* Right Column: Performance Task */}
            <View style={styles.column}>
                <View style={styles.columnHeader}>
                    <Text style={styles.columnTitle}>Performance Task</Text>
                    <TouchableOpacity style={styles.addButtonSmall}>
                       <Ionicons name="add" size={14} color="#757575" /> 
                    </TouchableOpacity>
                </View>
                
                <View style={styles.tasksList}>
                    <View style={[styles.taskItem, { backgroundColor: '#edd4d1' }]}>
                        <Text style={styles.taskText}>Body System Diagram</Text>
                    </View>
                </View>
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
  // List Header Styles
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  fordLogo: {
      width: 39,
      height: 39,
  },
  foradiText: {
      fontSize: 33,
      fontWeight: '300',
      color: '#b3b3b3',
      marginLeft: 10,
  },
  divider: {
      height: 1,
      backgroundColor: '#d9d9d9',
      width: '100%',
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
  actions: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 15,
  },
  icon: {
      //
  },
  userIconWrapper: {
      //
  },
  filterRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginBottom: 20,
      gap: 5,
  },
  filterText: {
      fontSize: 13,
      color: '#000',
  },
  grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 20,
      justifyContent: 'space-between',
  },
  cardContainer: {
      width: '48%', // 2 columns with gap
      marginBottom: 20,
  },
  cardImageContainer: {
      height: 225,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      // Shadow
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
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
  userIconContainer: {
    marginLeft: 'auto',
  },
  subjectHeader: {
      paddingHorizontal: 20,
      marginTop: 20,
      marginBottom: 15,
  },
  academicYear: {
      fontSize: 12,
      fontWeight: '300',
      color: '#000',
      marginBottom: 2,
  },
  subjectTitle: {
      fontSize: 17,
      color: '#000',
  },
  subjectCode: {
      fontWeight: '600',
  },
  bannerCard: {
      marginHorizontal: 20,
      height: 125,
      backgroundColor: '#5290d9',
      borderRadius: 6,
      marginBottom: 20,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      // Shadow
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.07,
      shadowRadius: 4,
      elevation: 2,
  },
  bannerImage: {
      width: 100,
      height: 100,
      opacity: 0.9,
  },
  sectionContainer: {
      paddingHorizontal: 20,
      marginBottom: 20,
  },
  sectionHeaderRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
  },
  sectionTitle: {
      fontSize: 14,
      fontWeight: '500',
      color: '#000',
  },
  addButton: {
      width: 28,
      height: 14,
      backgroundColor: '#fafafa',
      borderRadius: 23,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 1,
  },
  chapterList: {
      gap: 12,
  },
  chapterItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fafafa',
      paddingHorizontal: 15,
      paddingVertical: 12,
      borderRadius: 4, // From reference (rectangleGroup)
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.02,
      shadowRadius: 4,
      elevation: 1,
  },
  chapterContent: {
      flexDirection: 'row',
  },
  chapterTitle: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#000',
  },
  chapterSubtitle: {
      fontSize: 12,
      color: '#000',
  },
  chapterActions: {
      flexDirection: 'row',
      gap: 10,
  },
  columnsContainer: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      gap: 20,
  },
  column: {
      flex: 1,
  },
  columnHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
      height: 22,
  },
  columnTitle: {
      fontSize: 14,
      fontWeight: '500',
      color: '#000',
  },
  addButtonSmall: {
      width: 20,
      height: 14,
      backgroundColor: '#fafafa',
      borderRadius: 23,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 1,
  },
  tasksList: {
      gap: 8,
  },
  taskItem: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 4, // Assuming small radius for items
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.02,
      shadowRadius: 4,
      elevation: 1,
  },
  taskText: {
      fontSize: 12,
      fontWeight: '300',
      color: '#000',
  },
});
