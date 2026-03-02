import { SharedHeader } from '@/components/SharedHeader';
import { TaskBadge } from '@/components/TaskBadge';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DailyViewScreen() {
  const { date: dateParam } = useLocalSearchParams();
  
  // Use current date if no param is provided (fallback)
  const selectedDate = dateParam ? new Date(dateParam as string) : new Date();
  
  // Format long date string: e.g., "Friday, October 30"
  const formattedDateFull = selectedDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  // Calculate the week containing the selected date (starting Sunday)
  const getWeekDays = () => {
    const days = [];
    const currentDay = selectedDate.getDay(); // 0 is Sunday
    const sundayDate = new Date(selectedDate);
    sundayDate.setDate(selectedDate.getDate() - currentDay);

    const dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    for (let i = 0; i < 7; i++) {
      const day = new Date(sundayDate);
      day.setDate(sundayDate.getDate() + i);
      days.push({
        label: dayLabels[i],
        dateNum: day.getDate(),
        isToday: day.toDateString() === selectedDate.toDateString(),
        fullDate: day.toISOString().split('T')[0],
      });
    }
    return days;
  };

  const weekDays = getWeekDays();

  return (
    <SafeAreaView style={styles.container}>
      <SharedHeader showBackButton={true} />
      <View style={styles.dailyHeaderSection}>
        <Text style={styles.dailyLabel}>Daily</Text>
        <Text style={styles.dailyDateFull}>{formattedDateFull}</Text>
      </View>
      
      <View style={styles.weekStrip}>
        {weekDays.map((day, index) => (
          <View key={index} style={styles.weekDayItem}>
            <Text style={styles.weekDayName}>{day.label}</Text>
            <View style={[styles.weekDayCircle, day.isToday && styles.weekDayCircleSelected]}>
              <Text style={[styles.weekDayNum, day.isToday && styles.weekDayNumSelected]}>{day.dateNum}</Text>
            </View>
          </View>
        ))}
      </View>
      
      <ScrollView style={styles.dailySchedule} showsVerticalScrollIndicator={false}>
        <ScheduleCard 
          time="08:00 AM" 
          subject="SCIENCE" 
          grade="Grade 8 - Tesla" 
          color="#fff200" 
          badge="L2" 
        />
        <ScheduleCard 
          time="09:30 AM" 
          subject="SCIENCE" 
          grade="Grade 9 - Curie" 
          color="#5290d9" 
          badge="SW2" 
          badgeColor="#aeb6e6" 
        />
        <ScheduleCard 
          time="11:00 AM" 
          subject="SCIENCE" 
          grade="Grade 9 - Bohr" 
          color="#7a95b4" 
          badge="Q1" 
          badgeColor="#aeb6e6" 
        />
        <ScheduleCard 
          time="01:00 PM" 
          subject="MATHEMATICS" 
          grade="Grade 10 - Newton" 
          color="#fe76a8" 
          badges={["L3", "SW3"]} 
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function ScheduleCard({ time, subject, grade, color, badge, badgeColor, badges }: any) {
  return (
    <View style={styles.timeRow}>
      <Text style={styles.timeLabel}>{time}</Text>
      <View style={[styles.scheduleCard, { borderLeftColor: color }]}>
          <View style={styles.scheduleContent}>
              <Text style={styles.subjectTitle}>{subject}</Text>
              <Text style={styles.gradeSubtitle}>{grade}</Text>
          </View>
          <View style={styles.taskBadgeContainer}>
              {badges ? badges.map((b: string, i: number) => (
                <TaskBadge key={i} text={b} borderColor={i === 0 ? '#8ebda7' : '#aeb6e6'} />
              )) : (
                <TaskBadge text={badge} borderColor={badgeColor || '#8ebda7'} />
              )}
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dailyHeaderSection: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  dailyLabel: {
    fontSize: 14,
    color: '#757575',
  },
  dailyDateFull: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e1e1e',
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
    paddingTop: 12,
  },
  scheduleCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderLeftWidth: 5,
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
    gap: 5,
  },
});
