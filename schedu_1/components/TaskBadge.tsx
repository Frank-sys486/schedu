import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TaskBadgeProps {
  text: string;
  borderColor?: string;
  backgroundColor?: string;
}

export const TaskBadge: React.FC<TaskBadgeProps> = ({ 
  text, 
  borderColor = '#8ebda7', 
  backgroundColor 
}) => {
  return (
    <View style={[
      styles.taskBadge, 
      { borderColor }, 
      backgroundColor ? { backgroundColor } : {}
    ]}>
      <Text style={styles.taskBadgeText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
