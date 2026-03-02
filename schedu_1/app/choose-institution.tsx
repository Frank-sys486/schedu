import ArrowDropDownIcon from '@/assets/icons/arrow_drop_down.svg';
import CheckIcon from '@/assets/icons/Check.svg';
import PlusIcon from '@/assets/icons/Plus.svg';
import SearchIcon from '@/assets/icons/Search.svg';
import SlidersIcon from '@/assets/icons/Sliders.svg';
import UserIcon from '@/assets/icons/User.svg';
import ChevronsRight from '@/assets/dashboard/icons/Chevrons right.svg';
import { useRouter, useLocalSearchParams, Stack } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const INSTITUTIONS = [
  { id: 'hephzibah', name: 'Hephzibah School Inc.', image: require('../assets/images/hephzibah.png') },
  { id: 'adventist', name: 'Adventist University of the Philippines', image: require('../assets/images/adventist.png') },
];

export default function ChooseInstitution() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleApplySelection = () => {
    if (selectedId) {
      const selected = INSTITUTIONS.find(i => i.id === selectedId);
      router.push({
        pathname: '/create-subject',
        params: { selectedInstitution: selected?.name }
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Remove the default navigation header */}
      <Stack.Screen options={{ headerShown: false }} />

      {/* Keep the Custom Header (Logo + SCHEDU) */}
      <View style={styles.header}>
        <Image source={require('../assets/images/ford-2 2.png')} style={styles.logo} />
        <Text style={styles.headerText}>SCHEDU</Text>
        <View style={styles.user}>
            <UserIcon width={28} height={28} color="#B3B3B3" />
        </View>
      </View>
      <View style={styles.divider} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Title & Actions Row - with back arrow before the text */}
        <View style={styles.titleRow}>
          <View style={styles.titleWithBack}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <View style={{ transform: [{ rotate: '180deg' }] }}>
                    <ChevronsRight width={24} height={24} color="black" />
                </View>
            </TouchableOpacity>
            <Text style={styles.pageTitle}>Choose Institution</Text>
          </View>
          
          <View style={styles.actions}>
             <SearchIcon width={21} height={21} color="black" />
             <PlusIcon width={29} height={29} color="black" />
             <SlidersIcon width={22} height={22} color="black" />
             <TouchableOpacity onPress={handleApplySelection}>
                <CheckIcon width={25} height={25} color={selectedId ? "#7ed957" : "black"} />
             </TouchableOpacity>
          </View>
        </View>

        {/* Filter Bar */}
        <View style={styles.filterBar}>
          <View style={styles.filterLeft}>
            <Text style={styles.filterText}>All</Text>
            <ArrowDropDownIcon width={16} height={16} color="black" />
          </View>
        </View>

        {/* Cards Container */}
        <View style={styles.cardContainer}>
          {INSTITUTIONS.map((item) => (
            <TouchableOpacity 
                key={item.id} 
                style={styles.card}
                onPress={() => setSelectedId(item.id)}
            >
                <View style={[
                    styles.imageSquare, 
                    selectedId === item.id && styles.selectedSquare
                ]}>
                    <Image source={item.image} style={styles.institutionImage} />
                </View>
                <Text style={[
                    styles.cardTitle,
                    selectedId === item.id && styles.selectedText
                ]}>{item.name}</Text>
            </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  logo: {
      width: 39,
      height: 39,
  },
  headerText: {
    fontSize: 33,
    fontWeight: '300',
    color: '#B3B3B3',
    marginLeft: 10,
  },
  user: {
    marginLeft: 'auto',
  },
  divider: {
    height: 1,
    backgroundColor: '#D9D9D9',
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
  titleWithBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 8,
  },
  pageTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  filterBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  filterLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  filterText: {
    fontSize: 13,
  },
  cardContainer: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    alignItems: 'center',
  },
  imageSquare: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    overflow: 'hidden',
  },
  selectedSquare: {
    borderColor: '#7ed957',
    borderWidth: 2,
  },
  institutionImage: {
    width: '85%',
    height: '85%',
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'System',
    color: '#000',
  },
  selectedText: {
    fontWeight: '600',
    color: '#7ed957',
  }
});
