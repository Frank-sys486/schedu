import CheckIcon from '@/assets/icons/Check.svg';
import ImageIcon from '@/assets/images/Image.svg';
import HexagonIcon from '@/assets/icons/Icon-1.svg'; // Using a placeholder since no hexagon SVG
import UserIcon from '@/assets/icons/User.svg';
import ChevronsRight from '@/assets/dashboard/icons/Chevrons right.svg';
import { useRouter, useLocalSearchParams, Stack } from 'expo-router';
import React, { useState, useEffect } from 'react';
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

export default function CreateSubjectScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [institution, setInstitution] = useState('');

  // Update institution when returning from ChooseInstitution
  useEffect(() => {
    if (params.selectedInstitution) {
      setInstitution(params.selectedInstitution as string);
    }
  }, [params.selectedInstitution]);

  const handleSave = () => {
    // Logic to save the subject would go here
    console.log('Saving Subject:', { title, code, institution });
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Remove the default navigation header */}
      <Stack.Screen options={{ headerShown: false }} />

      {/* Custom Header (Same as Choose Institution) */}
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
                    <Text style={styles.pageTitle}>Create Subject</Text>
                </View>
                <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
                    <CheckIcon width={28} height={28} color="#7ed957" />
                </TouchableOpacity>
            </View>
        </View>

        <Text style={styles.sectionLabel}>Overview</Text>

        {/* Form Container */}
        <View style={styles.formContainer}>
            {/* Title Image Placeholder Box */}
            <View style={styles.imagePlaceholder}>
                <ImageIcon width={48} height={48} color="#b3b3b3" />
                <View style={styles.hexagonIcon}>
                    <HexagonIcon width={16} height={16} color="#000" />
                </View>
            </View>

            {/* Input for Title */}
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.titleInput}
                    placeholder="Title"
                    placeholderTextColor="#b3b3b3"
                    value={title}
                    onChangeText={setTitle}
                />
            </View>

            {/* Row for Code and Institution */}
            <View style={styles.row}>
                <View style={[styles.inputWrapper, { flex: 1 }]}>
                    <TextInput
                        style={styles.smallInput}
                        placeholder="Subject Code"
                        placeholderTextColor="#b3b3b3"
                        value={code}
                        onChangeText={setCode}
                    />
                </View>
                <TouchableOpacity 
                    style={[styles.inputWrapper, { flex: 2, marginLeft: 10 }]}
                    onPress={() => router.push('/choose-institution')}
                >
                    <TextInput
                        style={styles.smallInput}
                        placeholder="Academic Institution"
                        placeholderTextColor="#b3b3b3"
                        value={institution}
                        editable={false}
                        pointerEvents="none"
                    />
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.divider} />

        {/* Upload Curriculum Section */}
        <View style={styles.curriculumSection}>
            <Text style={styles.curriculumLabel}>Upload Curriculum</Text>
            
            <View style={styles.uploadOptions}>
                {/* Left Column: T, Image, File Icons placeholder boxes */}
                <View style={styles.uploadButtonsContainer}>
                    <TouchableOpacity style={styles.uploadButton}>
                        <Text style={styles.uploadButtonText}>T</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.uploadButton}>
                        <ImageIcon width={24} height={24} color="#757575" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.uploadButton}>
                        <HexagonIcon width={24} height={24} color="#757575" />
                    </TouchableOpacity>
                </View>

                {/* Vertical Rectangle Placeholder from design */}
                <View style={styles.uploadPlaceholderLarge} />
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
  saveButton: {
    padding: 5,
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
  sectionLabel: {
    fontSize: 12,
    color: '#000',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  formContainer: {
    paddingHorizontal: 20,
    gap: 15,
  },
  imagePlaceholder: {
    height: 106,
    backgroundColor: '#fbfbfb',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  hexagonIcon: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  inputWrapper: {
    backgroundColor: '#fbfbfb',
    borderRadius: 2,
    height: 34,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  titleInput: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  row: {
    flexDirection: 'row',
  },
  smallInput: {
    textAlign: 'center',
    fontSize: 12,
    color: '#000',
  },
  divider: {
    height: 1,
    backgroundColor: '#d9d9d9',
    marginVertical: 25,
    marginHorizontal: 20,
  },
  curriculumSection: {
    paddingHorizontal: 20,
  },
  curriculumLabel: {
    fontSize: 12,
    color: '#000',
    marginBottom: 15,
  },
  uploadOptions: {
    flexDirection: 'row',
    gap: 20,
  },
  uploadButtonsContainer: {
    gap: 10,
  },
  uploadButton: {
    width: 52,
    height: 51,
    backgroundColor: '#fbfbfb',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  uploadPlaceholderLarge: {
    flex: 1,
    maxWidth: 110,
    height: 161,
    backgroundColor: '#fbfbfb',
    borderRadius: 7,
  }
});
