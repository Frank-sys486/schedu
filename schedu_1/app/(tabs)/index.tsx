import { ScheduleItem } from '@/components/ScheduleItem';
import { SharedHeader } from '@/components/SharedHeader';
import { DASHBOARD_DATA } from '@/constants/mockData';
import ChevronRightIcon from '@/assets/dashboard/icons/Chevrons right.svg';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const { header, schedule, educationalContent } = DASHBOARD_DATA;

  return (
    <SafeAreaView style={styles.container}>
      <SharedHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View style={styles.menuHeader}>
            <Text style={styles.menuHeaderTextSmall}>{header.upcoming}</Text>
            <Text style={styles.menuHeaderTextStrong}>{header.date}</Text>
          </View>

          {schedule.map((item) => (
            <ScheduleItem 
              key={item.id}
              subject={item.subject}
              grade={item.grade}
              time={item.time}
              indicatorColor={item.color}
              lessons={item.subItems}
            />
          ))}

          <View style={styles.divider} />

          <View style={styles.menuHeader}>
            <Text style={styles.menuHeaderTextSmall}>{header.overview}</Text>
            <Text style={styles.menuHeaderTextStrong}>{header.lesson}</Text>
            <ChevronRightIcon style={styles.chevron} width={16} height={16} color="black" />
          </View>

          <View style={styles.contentBox}>
            <Text style={styles.definitionText}>
              <Text style={{ fontWeight: 'bold' }}>A {educationalContent.title}</Text> {educationalContent.definition}
            </Text>
            <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Types of polynomials:</Text>
            {educationalContent.types.map((type, index) => (
              <Text key={index}>• {type}</Text>
            ))}
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
    body: {
        padding: 20,
    },
    menuHeader: {
        marginBottom: 20,
    },
    menuHeaderTextSmall: {
        fontSize: 14,
        color: '#757575',
    },
    menuHeaderTextStrong: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1e1e1e',
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(217, 217, 217, 0.17)',
        marginVertical: 20,
    },
    chevron: {
        position: 'absolute',
        right: 0,
        top: '50%',
    },
    contentBox: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.03)',
        borderRadius: 4,
        padding: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    definitionText: {
      lineHeight: 20,
      color: '#333',
    }
});
