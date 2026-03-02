import ArrowDropDownIcon from '@/assets/icons/arrow_drop_down.svg';
import SearchIcon from '@/assets/icons/Search.svg';
import SlidersIcon from '@/assets/icons/Sliders.svg';
import { SharedHeader } from '@/components/SharedHeader';
import { SubjectCard } from '@/components/SubjectCard';
import { SUBJECTS_DATA } from '@/constants/mockData';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const fordLogo = require('@/assets/dashboard/images/ford-2 2.png');

export default function LibraryScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.listHeader}>
            <Image source={fordLogo} style={styles.fordLogo} />
            <Text style={styles.foradiText}>SCHEDU</Text>
        </View>
        <View style={styles.divider} />

        <View style={styles.titleRow}>
            <Text style={styles.pageTitle}>Library</Text>
            <View style={styles.actions}>
                <SearchIcon width={24} height={24} color="#000" />
                <SlidersIcon width={24} height={24} color="#000" />
            </View>
        </View>

        <View style={styles.filterRow}>
            <Text style={styles.filterText}>Current</Text>
            <ArrowDropDownIcon width={16} height={16} color="#000" />
        </View>

        <View style={styles.grid}>
            {SUBJECTS_DATA.map((subject) => (
              <SubjectCard 
                key={subject.id}
                code={subject.code}
                title={subject.title}
                institution={subject.institution}
                color={subject.color}
                image={subject.image}
                onPress={() => router.push({
                  pathname: '/(tabs)/library/[id]',
                  params: { id: subject.id }
                })}
              />
            ))}
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
});
