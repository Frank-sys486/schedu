// c:\Users\Frank\Documents\code\18 thesis\schedu_1\app\(tabs)\calendar.tsx

import UserIcon from '@/assets/dashboard/icons/User.svg';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, LayoutAnimation, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, UIManager, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const s11 = require('@/assets/dashboard/images/S (1) 1.png');

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function CalendarScreen() {
  const [selectedDay, setSelectedDay] = useState<any>(null);

  const handleDayPress = (day: any) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setSelectedDay(day);
  };

  const closeDailyView = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedDay(null);
  };

  // Mock data to match the "October" reference
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  // Generating the grid based on the reference image (Oct 30 is Friday)
  // This array represents the 7x6 grid seen in the design
  const calendarDays = [
    // Row 1: Sep 27 - Oct 3
    { day: 27, currentMonth: false }, { day: 28, currentMonth: false }, { day: 29, currentMonth: false }, { day: 30, currentMonth: false }, 
    { day: 1, currentMonth: true, eventColor: '#8ebda7', isStart: true, title: 'Lesson 3', subtitle: 'Polynomials' }, { day: 2, currentMonth: true, eventColor: '#8ebda7', isEnd: true, title: 'Lesson 3', subtitle: 'Polynomials' }, { day: 3, currentMonth: true },
    
    // Row 2: Oct 4 - 10
    { day: 4, currentMonth: true }, { day: 5, currentMonth: true, eventColor: '#8ebda7', isStart: true, title: 'Lesson 4', subtitle: 'Quadratic Function' }, { day: 6, currentMonth: true, eventColor: '#8ebda7' }, { day: 7, currentMonth: true, eventColor: '#8ebda7' }, { day: 8, currentMonth: true, eventColor: '#8ebda7' }, { day: 9, currentMonth: true, eventColor: '#8ebda7', isEnd: true }, { day: 10, currentMonth: true },
    
    // Row 3: Oct 11 - 17
    { day: 11, currentMonth: true }, { day: 12, currentMonth: true, eventColor: '#94a2f2', isStart: true, title: 'SW 3', subtitle: 'Polynomials' }, { day: 13, currentMonth: true, eventColor: '#94a2f2' }, { day: 14, currentMonth: true, eventColor: '#94a2f2' }, { day: 15, currentMonth: true, eventColor: '#94a2f2' }, { day: 16, currentMonth: true, eventColor: '#94a2f2', isEnd: true, title: 'SW 3', subtitle: 'Polynomials' }, { day: 17, currentMonth: true },
    
    // Row 4: Oct 18 - 24 (Performance Task 19-23)
    { day: 18, currentMonth: true }, { day: 19, currentMonth: true, eventColor: '#d37676', isStart: true, title: 'Performance Task', subtitle: 'Body System Diagram' }, { day: 20, currentMonth: true, eventColor: '#d37676', title: 'Performance Task', subtitle: 'Body System Diagram' }, { day: 21, currentMonth: true, eventColor: '#d37676', title: 'Performance Task', subtitle: 'Body System Diagram' }, { day: 22, currentMonth: true, eventColor: '#d37676', title: 'Performance Task', subtitle: 'Body System Diagram' }, { day: 23, currentMonth: true, eventColor: '#d37676', isEnd: true, title: 'Performance Task', subtitle: 'Body System Diagram' }, { day: 24, currentMonth: true },
    
    // Row 5: Oct 25 - 31 (Performance Task 26-28)
    { day: 25, currentMonth: true }, { day: 26, currentMonth: true, eventColor: '#d37676', isStart: true, title: 'Performance Task', subtitle: 'Body System Diagram' }, { day: 27, currentMonth: true, eventColor: '#d37676', title: 'Performance Task', subtitle: 'Body System Diagram' }, { day: 28, currentMonth: true, eventColor: '#d37676', isEnd: true, title: 'Performance Task', subtitle: 'Body System Diagram' }, { day: 29, currentMonth: true }, { day: 30, currentMonth: true, selected: true }, { day: 31, currentMonth: true },
    
    // Row 6: Nov 1 - 7
    { day: 1, currentMonth: false }, { day: 2, currentMonth: false }, { day: 3, currentMonth: false }, { day: 4, currentMonth: false }, { day: 5, currentMonth: false }, { day: 6, currentMonth: false }, { day: 7, currentMonth: false },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={s11} style={styles.logo} />
          <Text style={styles.headerTitle}>SCHEDU</Text>
          <View style={styles.userIconContainer}>
            <UserIcon width={28} height={30} color="#B3B3B3" />
          </View>
        </View>

        {/* Page Title */}
        {!selectedDay && (
          <View style={styles.titleContainer}>
            <View>
                <Text style={styles.subTitle}>Monthly</Text>
                <Text style={styles.mainTitle}>October</Text>
            </View>
            <View style={styles.classSelector}>
                <View>
                    <Text style={styles.classSubject}>SCIENCE</Text>
                    <Text style={styles.classGrade}>Grade 8 - Tesla</Text>
                </View>
                <Ionicons name="chevron-down" size={16} color="#000" />
            </View>
          </View>
        )}

        {selectedDay ? (
          // DAILY VIEW
          <View style={styles.dailyContainer}>
             {/* Header Section */}
             <View style={styles.dailyHeaderSection}>
                <TouchableOpacity onPress={closeDailyView} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={18} color="#757575" />
                    <Text style={styles.dailyLabel}>Daily</Text>
                </TouchableOpacity>
                <Text style={styles.dailyDateFull}>Friday, October 30</Text>
             </View>
             
             {/* Week Strip (Mocked for Oct 25-31 based on reference) */}
             <View style={styles.weekStrip}>
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => {
                    const dateNum = 25 + index;
                    const isSelected = dateNum === 30; // Friday 30th is selected in reference
                    return (
                        <View key={index} style={styles.weekDayItem}>
                            <Text style={styles.weekDayName}>{day}</Text>
                            <View style={[styles.weekDayCircle, isSelected && styles.weekDayCircleSelected]}>
                                <Text style={[styles.weekDayNum, isSelected && styles.weekDayNumSelected]}>{dateNum}</Text>
                            </View>
                        </View>
                    );
                })}
             </View>
             
             <ScrollView style={styles.dailySchedule} showsVerticalScrollIndicator={false}>
                {/* Item 1: Science G8 */}
                <View style={styles.timeRow}>
                    <Text style={styles.timeLabel}>08:00 AM</Text>
                    <View style={[styles.scheduleCard, { borderLeftColor: '#fff200' }]}>
                        <View style={styles.scheduleContent}>
                            <Text style={styles.subjectTitle}>SCIENCE</Text>
                            <Text style={styles.gradeSubtitle}>Grade 8 - Tesla</Text>
                        </View>
                        <View style={[styles.taskBadge, { borderColor: '#8ebda7' }]}>
                            <Text style={styles.taskBadgeText}>L2</Text>
                        </View>
                    </View>
                </View>

                {/* Item 2: Science G9 Curie */}
                <View style={styles.timeRow}>
                    <Text style={styles.timeLabel}>09:30 AM</Text>
                    <View style={[styles.scheduleCard, { borderLeftColor: '#5290d9' }]}>
                        <View style={styles.scheduleContent}>
                            <Text style={styles.subjectTitle}>SCIENCE</Text>
                            <Text style={styles.gradeSubtitle}>Grade 9 - Curie</Text>
                        </View>
                        <View style={[styles.taskBadge, { borderColor: '#aeb6e6' }]}>
                            <Text style={styles.taskBadgeText}>SW2</Text>
                        </View>
                    </View>
                </View>

                {/* Item 3: Science G9 Bohr */}
                <View style={styles.timeRow}>
                    <Text style={styles.timeLabel}>11:00 AM</Text>
                    <View style={[styles.scheduleCard, { borderLeftColor: '#7a95b4' }]}>
                        <View style={styles.scheduleContent}>
                            <Text style={styles.subjectTitle}>SCIENCE</Text>
                            <Text style={styles.gradeSubtitle}>Grade 9 - Bohr</Text>
                        </View>
                        <View style={[styles.taskBadge, { borderColor: '#aeb6e6' }]}>
                            <Text style={styles.taskBadgeText}>Q1</Text>
                        </View>
                    </View>
                </View>

                {/* Item 4: Math G10 */}
                <View style={styles.timeRow}>
                    <Text style={styles.timeLabel}>01:00 PM</Text>
                    <View style={[styles.scheduleCard, { borderLeftColor: '#fe76a8' }]}>
                        <View style={styles.scheduleContent}>
                            <Text style={styles.subjectTitle}>MATHEMATICS</Text>
                            <Text style={styles.gradeSubtitle}>Grade 10 - Newton</Text>
                        </View>
                        <View style={styles.taskBadgeContainer}>
                            <View style={[styles.taskBadge, { borderColor: '#8ebda7', marginBottom: 8 }]}>
                                <Text style={styles.taskBadgeText}>L3</Text>
                            </View>
                            <View style={[styles.taskBadge, { borderColor: '#aeb6e6' }]}>
                                <Text style={styles.taskBadgeText}>SW3</Text>
                            </View>
                        </View>
                    </View>
                </View>
             </ScrollView>
          </View>
        ) : (
          // CALENDAR GRID
          <View style={styles.calendarContainer}>
            {/* Days of Week Header */}
            <View style={styles.weekRow}>
                {daysOfWeek.map((day, index) => (
                    <Text key={index} style={styles.weekDayText}>{day}</Text>
                ))}
            </View>
            
            {/* Dates Grid */}
            <View style={styles.daysGrid}>
                {calendarDays.map((item, index) => (
                    <TouchableOpacity 
                      key={index} 
                      style={[styles.dayCell, item.isStart && { zIndex: 10 }]}
                      onPress={() => handleDayPress(item)}
                      activeOpacity={0.7}
                    >
                        {/* Date Number Layer */}
                        <View style={[
                            styles.dayCircle, 
                            item.selected && styles.selectedDayCircle
                        ]}>
                            <Text style={[
                                styles.dayText, 
                                !item.currentMonth && styles.otherMonthDayText,
                                item.selected && styles.selectedDayText,
                            ]}>
                                {item.day}
                            </Text>
                        </View>

                        {/* Colored Bar Layer (Below Number) */}
                        {item.eventColor && (
                          <View style={[
                            styles.eventBar,
                            { 
                              backgroundColor: item.eventColor,
                            },
                            item.isStart && styles.eventBarStart,
                            item.isEnd && styles.eventBarEnd,
                          ]}>
                            {item.isStart && (
                                <View style={styles.textContainer}>
                                    <Text style={styles.eventTitle} numberOfLines={1}>{item.title}</Text>
                                    <Text style={styles.eventSubtitle} numberOfLines={1}>{item.subtitle}</Text>
                                </View>
                            )}
                          </View>
                        )}
                    </TouchableOpacity>
                ))}
            </View>
          </View>
        )}
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
    paddingBottom: 100, // Extra space for bottom tab bar
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
  titleContainer: {
      paddingHorizontal: 20,
      marginTop: 20,
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
  },
  subTitle: {
      fontSize: 14,
      color: '#757575',
  },
  mainTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#1e1e1e',
      marginTop: 4,
  },
  classSelector: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      borderRadius: 7,
      paddingHorizontal: 12,
      paddingVertical: 8,
      gap: 10,
      // Shadow from reference
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
  },
  classSubject: {
      fontSize: 14,
      fontWeight: '700',
      fontStyle: 'italic',
      color: '#000',
  },
  classGrade: {
      fontSize: 11,
      color: '#000',
      marginTop: 2,
  },
  calendarContainer: {
      paddingHorizontal: 10,
  },
  weekRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 10,
  },
  weekDayText: {
      width: 40,
      textAlign: 'center',
      color: '#d9d9d9',
      fontWeight: 'bold',
      fontSize: 12,
  },
  daysGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
  },
  dayCell: {
      width: '14.28%', // 100% divided by 7 days
      aspectRatio: 1, // Keeps cells square
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 5,
  },
  dayCircle: {
      width: 32,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
  },
  selectedDayCircle: {
      backgroundColor: '#7ed957', // Green selection color
  },
  dayText: {
      fontSize: 14,
      color: '#b3b3b3',
      fontFamily: 'System', // Use 'Roboto Mono' if loaded, otherwise System
  },
  otherMonthDayText: {
      color: '#e0e0e0',
  },
  selectedDayText: {
      color: '#fff',
      fontWeight: 'bold',
  },
  eventBar: {
      position: 'absolute',
      height: 24,
      width: '100%', // Fill width to connect with neighbors
      bottom: 2,
      justifyContent: 'center',
      overflow: 'visible', // Allow text to spill over to next cells
  },
  eventBarStart: {
      marginLeft: 6, // Small gap from edge to indicate start
  },
  eventBarEnd: {
      marginRight: 6, // Small gap from edge to indicate end
  },
  textContainer: {
      marginLeft: 4,
      width: 200, // Force width wider than cell to span across
  },
  eventTitle: {
      fontSize: 8,
      fontWeight: 'bold',
      color: '#fff',
  },
  eventSubtitle: {
      fontSize: 7,
      color: 'rgba(255,255,255,0.9)',
  },
  // Daily View Styles
  dailyContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dailyHeaderSection: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  dailyLabel: {
    fontSize: 14,
    color: '#757575',
    marginLeft: 4,
  },
  dailyDateFull: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e1e1e',
    marginLeft: 4,
  },
  weekStrip: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginBottom: 20,
    paddingBottom: 10,
  },
  weekDayItem: {
    alignItems: 'center',
    gap: 8,
  },
  weekDayName: {
    fontSize: 12,
    color: '#000',
  },
  weekDayCircle: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  weekDayCircleSelected: {
    backgroundColor: '#7ed957',
  },
  weekDayNum: {
    fontSize: 16,
    color: '#b3b3b3',
  },
  weekDayNumSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dailySchedule: {
    paddingHorizontal: 20,
  },
  timeRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  timeLabel: {
    width: 65,
    fontSize: 12,
    color: '#757575',
    fontWeight: '500',
    paddingTop: 12, // Visually align with the top of the card
  },
  scheduleCard: {
    flex: 1, // Take up remaining width
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff', // #fafafa in reference
    borderRadius: 8,
    padding: 16,
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderLeftWidth: 5, // Colored strip on the left
  },
  scheduleContent: {
    flex: 1,
  },
  subjectTitle: {
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'italic',
    marginBottom: 4,
  },
  gradeSubtitle: {
    fontSize: 12,
    color: '#000',
  },
  taskBadgeContainer: {
    alignItems: 'flex-end',
  },
  taskBadge: {
    borderWidth: 1,
    borderRadius: 11,
    paddingHorizontal: 10,
    paddingVertical: 4,
    minWidth: 43,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskBadgeText: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.56)',
  },
});
