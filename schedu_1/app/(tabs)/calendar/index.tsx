import { SharedHeader } from '@/components/SharedHeader';
import { CALENDAR_EVENTS } from '@/constants/mockData';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CalendarScreen() {
  const router = useRouter();
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  const currentYear = 2026;
  const currentMonth = 9; // October

  const calendarGridData = Array.from({ length: 35 }, (_, i) => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const firstDayIndex = firstDayOfMonth.getDay();
    
    const actualDay = new Date(currentYear, currentMonth, 1);
    actualDay.setDate(1 - firstDayIndex + i);
    
    const dayNum = actualDay.getDate();
    const isCurrentMonth = actualDay.getMonth() === currentMonth;
    
    const event = isCurrentMonth ? CALENDAR_EVENTS.find(e => e.day === dayNum && e.currentMonth) : null;
    
    return { 
      day: dayNum, 
      currentMonth: isCurrentMonth, 
      fullDate: actualDay.toISOString().split('T')[0],
      ...event 
    };
  });

  // Group days into rows for flexbox layout
  const calendarGridRows = [];
  for (let i = 0; i < calendarGridData.length; i += 7) {
    calendarGridRows.push(calendarGridData.slice(i, i + 7));
  }

  const handleDayPress = (fullDate: string) => {
    router.push({
      pathname: '/(tabs)/calendar/[date]',
      params: { date: fullDate }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <SharedHeader />
      <View style={styles.content}>
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

        <View style={styles.calendarContainer}>
            <View style={styles.weekRow}>
                {daysOfWeek.map((day, index) => (
                    <Text key={index} style={styles.weekDayText}>{day}</Text>
                ))}
            </View>
            
            <View style={styles.daysGrid}>
              {calendarGridRows.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.calendarRow}>
                  {row.map((item, cellIndex) => (
                    <TouchableOpacity 
                      key={cellIndex} 
                      style={styles.dayCell}
                      onPress={() => handleDayPress(item.fullDate)}
                      activeOpacity={0.7}
                    >
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

                        {item.eventColor && (
                          <View style={[
                            styles.eventBar,
                            { backgroundColor: item.eventColor },
                            item.isStart && styles.eventBarStart,
                            item.isEnd && styles.eventBarEnd,
                            // Handle single day event rounding
                            item.isStart && item.isEnd && { borderRadius: 6 }
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
              ))}
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
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
      flex: 1,
  },
  weekRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 10,
  },
  weekDayText: {
      flex: 1,
      textAlign: 'center',
      color: '#d9d9d9',
      fontWeight: 'bold',
      fontSize: 12,
  },
  daysGrid: {
      flex: 1,
      flexDirection: 'column',
  },
  calendarRow: {
    flex: 1,
    flexDirection: 'row',
  },
  dayCell: {
      flex: 1,
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
  },
  dayCircle: {
      width: 32,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      zIndex: 1, // Ensure number is above event bar
  },
  selectedDayCircle: {
      backgroundColor: '#7ed957',
  },
  dayText: {
      fontSize: 14,
      color: '#b3b3b3',
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
      height: 28, 
      width: '100%',
      bottom: '15%',
      justifyContent: 'center',
  },
  eventBarStart: {
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6,
  },
  eventBarEnd: {
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
  },
  textContainer: {
      marginLeft: 8,
      zIndex: 2, // Ensure text is on top
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
});
