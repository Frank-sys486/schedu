import ArrowDropDownIcon from '@/assets/icons/arrow_drop_down.svg';
import CheckIcon from '@/assets/icons/Check.svg';
import UserIcon from '@/assets/icons/User.svg';
import ChevronsRight from '@/assets/dashboard/icons/Chevrons right.svg';
import { useRouter, Stack } from 'expo-router';
import React from 'react';
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

export default function CreateActivityScreen() {
  const router = useRouter();
  
  const handleSave = () => {
    console.log('Saving Activity');
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
                    <Text style={styles.pageTitle}>Create Activity</Text>
                </View>
                <TouchableOpacity onPress={handleSave}>
                    <CheckIcon width={28} height={28} color="#7ed957" />
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.formContainer}>
            <Text style={styles.sectionLabel}>Overview</Text>
            
            <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Subject</Text>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} placeholder="Select Subject" placeholderTextColor="#b3b3b3" />
                    <ArrowDropDownIcon width={16} height={16} color="black" />
                </View>
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Scope</Text>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} placeholder="Select Scope" placeholderTextColor="#b3b3b3" />
                    <ArrowDropDownIcon width={16} height={16} color="black" />
                </View>
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Category</Text>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} placeholder="Select Category" placeholderTextColor="#b3b3b3" />
                    <ArrowDropDownIcon width={16} height={16} color="black" />
                </View>
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Activity Type</Text>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} placeholder="Select Activity Type" placeholderTextColor="#b3b3b3" />
                    <ArrowDropDownIcon width={16} height={16} color="black" />
                </View>
            </View>

            <View style={styles.divider} />

            <Text style={styles.sectionLabel}>Overview</Text>
            <View style={styles.overviewBox}>
                <TextInput 
                    style={styles.overviewInput} 
                    placeholder="Type details here..." 
                    placeholderTextColor="#b3b3b3"
                    multiline
                />
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
  divider: {
    height: 1,
    backgroundColor: '#d9d9d9',
    marginVertical: 10,
  },
  overviewBox: {
    minHeight: 150,
    backgroundColor: '#fbfbfb',
    borderRadius: 2,
    padding: 10,
  },
  overviewInput: {
    fontSize: 12,
    color: '#000',
    textAlignVertical: 'top',
  }
});
