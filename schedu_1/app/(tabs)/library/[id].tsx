import ArrowDropDownIcon from '@/assets/icons/arrow_drop_down.svg';
import PlusIcon from '@/assets/icons/Plus.svg';
import { SharedHeader } from '@/components/SharedHeader';
import { SUBJECTS_DATA } from '@/constants/mockData';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const bannerImage = require('@/assets/images/image 4.png');

export default function SubjectDetailsScreen() {
  const { id } = useLocalSearchParams();
  const subject = SUBJECTS_DATA.find(s => s.id === id) || SUBJECTS_DATA[0];

  return (
    <SafeAreaView style={styles.container}>
      <SharedHeader showBackButton={true} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.subjectHeader}>
            <Text style={styles.academicYear}>A.Y. 2025 - 2026</Text>
            <Text style={styles.subjectTitle}>
                <Text style={styles.subjectCode}>{subject.code} </Text>
                - {subject.title}
            </Text>
        </View>

        <View style={styles.bannerCard}>
            <Image source={bannerImage} style={styles.bannerImage} resizeMode="cover" />
        </View>

        <View style={styles.sectionContainer}>
            <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>Notes</Text>
                <TouchableOpacity style={styles.addButton}>
                    <PlusIcon width={16} height={16} color="#757575" />
                </TouchableOpacity>
            </View>
            
            <View style={styles.chapterList}>
                {subject.chapters.map((chapter) => (
                  <TouchableOpacity key={chapter.id} style={styles.chapterItem}>
                      <View style={styles.chapterContent}>
                          <Text style={styles.chapterTitle}>{chapter.title}</Text>
                          <Text style={styles.chapterSubtitle}> - {chapter.subtitle}</Text>
                      </View>
                      <View style={styles.chapterActions}>
                          <ArrowDropDownIcon width={20} height={20} color="#757575" />
                          <View style={{ width: 20, height: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#757575', fontWeight: 'bold' }}>...</Text>
                          </View>
                      </View>
                  </TouchableOpacity>
                ))}
            </View>
        </View>

        <View style={styles.columnsContainer}>
            <View style={styles.column}>
                <View style={styles.columnHeader}>
                    <Text style={styles.columnTitle}>Written Work</Text>
                    <TouchableOpacity style={styles.addButtonSmall}>
                       <PlusIcon width={14} height={14} color="#757575" /> 
                    </TouchableOpacity>
                </View>
                
                <View style={styles.tasksList}>
                    {subject.writtenWork.map((task) => (
                      <View key={task.id} style={[styles.taskItem, { backgroundColor: task.type === 'quiz' ? '#d9e2ff' : '#e4e7f2' }]}>
                          <Text style={styles.taskText}>{task.title}</Text>
                      </View>
                    ))}
                </View>
            </View>

            <View style={styles.column}>
                <View style={styles.columnHeader}>
                    <Text style={styles.columnTitle}>Performance Task</Text>
                    <TouchableOpacity style={styles.addButtonSmall}>
                       <PlusIcon width={14} height={14} color="#757575" /> 
                    </TouchableOpacity>
                </View>
                
                <View style={styles.tasksList}>
                    {subject.performanceTasks.map((task) => (
                      <View key={task.id} style={[styles.taskItem, { backgroundColor: '#edd4d1' }]}>
                          <Text style={styles.taskText}>{task.title}</Text>
                      </View>
                    ))}
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
      borderRadius: 4,
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
      borderRadius: 4,
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
