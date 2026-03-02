import { SharedHeader } from '@/components/SharedHeader';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
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

export default function CreateSubjectScreen() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [institution, setInstitution] = useState('');

  const handleSave = () => {
    // Logic to save the subject would go here
    console.log('Saving Subject:', { title, code, institution });
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <SharedHeader 
        showBackButton={true} 
        rightElement={
          <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
            <Ionicons name="checkmark" size={28} color="#7ed957" />
          </TouchableOpacity>
        }
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.pageTitleContainer}>
            <Text style={styles.pageTitle}>Create Subject</Text>
        </View>

        <Text style={styles.sectionLabel}>Overview</Text>

        {/* Form Container */}
        <View style={styles.formContainer}>
            {/* Title Image Placeholder Box */}
            <View style={styles.imagePlaceholder}>
                <Ionicons name="image-outline" size={48} color="#b3b3b3" />
                <View style={styles.hexagonIcon}>
                    <Ionicons name="hexagon-outline" size={16} color="#000" />
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
                <View style={[styles.inputWrapper, { flex: 2, marginLeft: 10 }]}>
                    <TextInput
                        style={styles.smallInput}
                        placeholder="Academic Institution"
                        placeholderTextColor="#b3b3b3"
                        value={institution}
                        onChangeText={setInstitution}
                    />
                </View>
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
                        <Ionicons name="image-outline" size={24} color="#757575" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.uploadButton}>
                        <Ionicons name="document-outline" size={24} color="#757575" />
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
