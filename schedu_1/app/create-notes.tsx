import ArrowDropDownIcon from '@/assets/icons/arrow_drop_down.svg';
import CheckIcon from '@/assets/icons/Check.svg';
import ImageIcon from '@/assets/images/Image.svg';
import UserIcon from '@/assets/icons/User.svg';
import ChevronsRight from '@/assets/dashboard/icons/Chevrons right.svg';
import HexagonIcon from '@/assets/icons/Icon-1.svg';
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

export default function CreateNotesScreen() {
  const router = useRouter();
  
  const handleSave = () => {
    console.log('Saving Notes');
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
                    <Text style={styles.pageTitle}>Create Lesson</Text>
                </View>
                <TouchableOpacity onPress={handleSave}>
                    <CheckIcon width={28} height={28} color="#7ed957" />
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.formContainer}>
            <Text style={styles.sectionLabel}>Overview</Text>
            
            <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Title</Text>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} placeholder="Title" placeholderTextColor="#b3b3b3" />
                </View>
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Subject</Text>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} placeholder="Select Subject" placeholderTextColor="#b3b3b3" />
                    <ArrowDropDownIcon width={16} height={16} color="black" />
                </View>
            </View>

            <View style={styles.inputGroup}>
                <View style={styles.labelWithHint}>
                    <Text style={styles.inputLabel}>Chapter</Text>
                    <Text style={styles.hint}>(can be blank)</Text>
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} placeholder="Select Chapter" placeholderTextColor="#b3b3b3" />
                    <ArrowDropDownIcon width={16} height={16} color="black" />
                </View>
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Lesson</Text>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} placeholder="Lesson" placeholderTextColor="#b3b3b3" />
                </View>
            </View>

            <View style={styles.divider} />

            <Text style={styles.sectionLabel}>Upload Lesson</Text>
            <View style={styles.uploadRow}>
                <View style={styles.uploadButtons}>
                    <TouchableOpacity style={styles.uploadBtn}>
                        <Text style={styles.uploadBtnText}>T</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.uploadBtn}>
                        <ImageIcon width={24} height={24} color="#757575" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.uploadBtn}>
                        <HexagonIcon width={24} height={24} color="#757575" />
                    </TouchableOpacity>
                </View>
                <View style={styles.uploadPlaceholder} />
            </View>

            <View style={styles.divider} />

            <Text style={styles.sectionLabel}>Formatting (optional)</Text>
            <View style={styles.formattingBox}>
                <Text style={styles.formattingHint}>(No bullet points, precise descriptions, summarized descriptions, etc.)</Text>
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
  labelWithHint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  hint: {
    fontSize: 8,
    color: '#757575',
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
  uploadRow: {
    flexDirection: 'row',
    gap: 20,
  },
  uploadButtons: {
    gap: 10,
  },
  uploadBtn: {
    width: 52,
    height: 51,
    backgroundColor: '#fbfbfb',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadBtnText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  uploadPlaceholder: {
    flex: 1,
    maxWidth: 110,
    height: 161,
    backgroundColor: '#fbfbfb',
    borderRadius: 7,
  },
  formattingBox: {
    height: 100,
    backgroundColor: '#fbfbfb',
    borderRadius: 2,
    padding: 10,
  },
  formattingHint: {
    fontSize: 10,
    color: '#757575',
    textAlign: 'center',
  }
});
