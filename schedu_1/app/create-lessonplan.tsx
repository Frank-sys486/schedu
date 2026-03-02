import ArrowDropDownIcon from '@/assets/icons/arrow_drop_down.svg';
import CheckIcon from '@/assets/icons/Check.svg';
import PlusIcon from '@/assets/icons/Plus.svg';
import UserIcon from '@/assets/icons/User.svg';
import ChevronsRight from '@/assets/dashboard/icons/Chevrons right.svg';
import { useRouter, Stack } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CreateLessonPlanScreen() {
  const router = useRouter();
  
  const handleSave = () => {
    console.log('Saving Lesson Plan');
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/images/ford-2 2.png')} style={styles.logo} />
        <Text style={styles.headerText}>SCHEDU</Text>
        <View style={styles.user}>
            <UserIcon width={28} height={28} color="#B3B3B3" />
        </View>
      </View>
      <View style={styles.dividerHeader} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.pageTitleContainer}>
            <View style={styles.titleRow}>
                <View style={styles.titleWithBack}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <View style={{ transform: [{ rotate: '180deg' }] }}>
                            <ChevronsRight width={24} height={24} color="black" />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.pageTitle}>Create Lessonplan</Text>
                </View>
                <TouchableOpacity onPress={handleSave}>
                    <CheckIcon width={28} height={28} color="#7ed957" />
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.formContainer}>
            <Text style={styles.sectionLabel}>Overview</Text>
            
            <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Academic Year</Text>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} placeholder="Select Year" placeholderTextColor="#b3b3b3" />
                    <ArrowDropDownIcon width={16} height={16} color="black" />
                </View>
            </View>

            <View style={styles.row}>
                <View style={[styles.inputGroup, { flex: 1 }]}>
                    <Text style={styles.inputLabel}>Subject</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput style={styles.input} placeholder="Select Subject" placeholderTextColor="#b3b3b3" />
                        <ArrowDropDownIcon width={16} height={16} color="black" />
                    </View>
                </View>
                <View style={[styles.inputGroup, { flex: 1, marginLeft: 10 }]}>
                    <Text style={styles.inputLabel}>Section</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput style={styles.input} placeholder="Select Section" placeholderTextColor="#b3b3b3" />
                        <ArrowDropDownIcon width={16} height={16} color="black" />
                    </View>
                </View>
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Term & Category</Text>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} placeholder="Select Term" placeholderTextColor="#b3b3b3" />
                    <ArrowDropDownIcon width={16} height={16} color="black" />
                </View>
            </View>

            <View style={styles.row}>
                <View style={[styles.inputGroup, { flex: 1 }]}>
                    <Text style={styles.inputLabel}>Schedule</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput style={styles.input} placeholder="Select Schedule" placeholderTextColor="#b3b3b3" />
                        <ArrowDropDownIcon width={16} height={16} color="black" />
                    </View>
                </View>
                <View style={[styles.inputGroup, { flex: 1, marginLeft: 10 }]}>
                    <Text style={styles.inputLabel}>Duration</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput style={styles.input} placeholder="Select Duration" placeholderTextColor="#b3b3b3" />
                        <ArrowDropDownIcon width={16} height={16} color="black" />
                    </View>
                </View>
            </View>

            <View style={styles.divider} />

            <Text style={styles.sectionLabel}>Minimum Requirements</Text>
            
            <View style={styles.requirementItem}>
                <Text style={styles.inputLabel}>Written Work</Text>
                <View style={styles.reqBox}>
                    <Text style={styles.reqHint}>(1 Seatwork per Lesson, 1 activity per laboratory session, etc.)</Text>
                </View>
            </View>

            <View style={styles.requirementItem}>
                <Text style={styles.inputLabel}>Performance Task</Text>
                <View style={styles.reqBox} />
            </View>

            <View style={styles.requirementItem}>
                <Text style={styles.inputLabel}>Exam</Text>
                <View style={styles.reqBox} />
            </View>

            <View style={styles.divider} />

            <Text style={styles.sectionLabel}>Extra Requirements</Text>
            <View style={styles.reqBoxLarge} />

            <View style={styles.divider} />

            <View style={styles.specialDatesHeader}>
                <Text style={styles.sectionLabel}>Special Dates (Optional)</Text>
                <TouchableOpacity style={styles.plusButton}>
                    <PlusIcon width={16} height={16} color="#000" />
                </TouchableOpacity>
            </View>
            <View style={styles.dateChip}>
                <Text style={styles.dateText}>June 05 2025</Text>
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
  dividerHeader: {
    height: 1,
    backgroundColor: '#D9D9D9',
    width: '100%',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  pageTitleContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    color: '#000',
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
    marginTop: 15,
    marginBottom: 10,
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 11,
    color: '#000',
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    borderRadius: 2,
    height: 34,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 12,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
  },
  divider: {
    height: 1,
    backgroundColor: '#d9d9d9',
    marginVertical: 10,
  },
  requirementItem: {
    marginBottom: 15,
  },
  reqBox: {
    height: 34,
    backgroundColor: '#fbfbfb',
    borderRadius: 2,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  reqHint: {
    fontSize: 8,
    color: '#757575',
  },
  reqBoxLarge: {
    height: 80,
    backgroundColor: '#fbfbfb',
    borderRadius: 2,
  },
  specialDatesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plusButton: {
    padding: 5,
  },
  dateChip: {
    backgroundColor: '#fbfbfb',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  dateText: {
    fontSize: 11,
    color: '#000',
  }
});
