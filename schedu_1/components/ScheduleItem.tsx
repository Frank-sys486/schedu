import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ScheduleItemProps {
  subject: string;
  grade: string;
  time: string;
  indicatorColor: string;
  lessons?: { id: string; title: string; borderColor?: string }[];
}

export const ScheduleItem: React.FC<ScheduleItemProps> = ({
  subject,
  grade,
  time,
  indicatorColor,
  lessons = [],
}) => {
  return (
    <View style={styles.scheduleItem}>
      <View style={[styles.scheduleIndicator, { backgroundColor: indicatorColor }]} />
      <View style={styles.scheduleDetails}>
        <Text style={styles.subject}>{subject}</Text>
        <Text style={styles.grade}>{grade}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View style={styles.lessonDetails}>
        {lessons.map((lesson) => (
          <View key={lesson.id} style={[styles.lessonBox, lesson.borderColor ? { borderColor: lesson.borderColor } : {}]}>
            <Text style={styles.lessonText}>{lesson.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scheduleItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  scheduleIndicator: {
    width: 5,
    height: 75,
    marginRight: 10,
  },
  scheduleDetails: {
    flex: 1,
  },
  subject: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  grade: {
    fontSize: 12,
    color: '#000',
  },
  time: {
    fontSize: 12,
    color: '#000',
  },
  lessonDetails: {
    flex: 2,
    marginLeft: 10,
  },
  lessonBox: {
    borderWidth: 1,
    borderColor: '#8ebda7',
    borderRadius: 3,
    padding: 5,
    marginBottom: 5,
    justifyContent: 'center',
  },
  lessonText: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.56)',
    textAlign: 'center',
  },
});
