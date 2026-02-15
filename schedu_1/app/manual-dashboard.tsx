import CreateModal from '@/components/CreateModal';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ManualDashboard() {
  const [createVisible, setCreateVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Header 1: Upcoming */}
      <View style={styles.headerSection}>
        <Text style={styles.headerLabel}>Upcoming</Text>
        <Text style={styles.headerTitle}>Friday, October 30</Text>
      </View>

      {/* Header 2: Overview */}
      <View style={styles.headerSection}>
        <Text style={styles.headerLabel}>Overview</Text>
        <Text style={styles.headerTitle}>Lesson 3: Polynomials</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Schedule Item 1 */}
        <View style={styles.scheduleRow}>
            <View style={styles.pinkLine} />
            <View style={styles.scheduleContent}>
                <Text style={styles.subject}>MAT10</Text>
                <Text style={styles.grade}>Grade 10 - Newton</Text>
                <Text style={styles.time}>11:30 AM to 1:30 PM</Text>
                
                <Text style={styles.lessonTitle}>Lesson 3: Polynomials</Text>
                
                <View style={[styles.subBox, styles.greenBox]}>
                    <Text style={styles.subBoxText}>Lesson 4: Quadratic Function</Text>
                </View>
                <View style={[styles.subBox, styles.purpleBox]}>
                    <Text style={styles.subBoxText}>SW 3: Polynomials</Text>
                </View>
            </View>
        </View>

        {/* Schedule Item 2 */}
        <View style={styles.scheduleRow}>
            <View style={styles.pinkLine} />
            <View style={styles.scheduleContent}>
                <Text style={styles.subject}>MAT10</Text>
                <Text style={styles.grade}>Grade 10 - Einstein</Text>
                <Text style={styles.time}>3:00 PM to 4:00 PM</Text>
            </View>
        </View>

        {/* Content Text */}
        <View style={styles.contentBox}>
            <Text style={styles.contentText}>
                <Text style={{fontWeight: 'bold'}}>A polynomial</Text> is a mathematical expression composed of variables, coefficients, and exponents, involving only the operations of addition, subtraction, and multiplication.
                {'\n\n'}
                <Text style={{fontWeight: 'bold'}}>Types of polynomials:</Text>
                {'\n'}• Monomial: A polynomial with one term
                {'\n'}• Binomial: A polynomial with two terms
                {'\n'}• Trinomial: A polynomial with three terms
            </Text>
            <View style={styles.screenshotRow}>
                 <View style={styles.screenshotPlaceholder}><Text style={{fontSize: 10}}>Screenshot 1</Text></View>
                 <View style={styles.screenshotPlaceholder}><Text style={{fontSize: 10}}>Screenshot 2</Text></View>
            </View>
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
            <Ionicons name="home-outline" size={24} color="#757575" />
            <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
            <Ionicons name="calendar-outline" size={24} color="#757575" />
            <Text style={styles.navLabel}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => setCreateVisible(true)}>
            <Ionicons name="add-circle-outline" size={24} color="#757575" />
            <Text style={styles.navLabel}>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
            <Ionicons name="library-outline" size={24} color="#757575" />
            <Text style={styles.navLabel}>Library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
            <Ionicons name="albums-outline" size={24} color="#757575" />
            <Text style={styles.navLabel}>Plans</Text>
        </TouchableOpacity>
      </View>

      {/* Create Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={createVisible}
        onRequestClose={() => setCreateVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setCreateVisible(false)}>
            <View style={styles.modalContent}>
                <CreateModal />
            </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
  headerSection: { paddingHorizontal: 20, marginBottom: 15 },
  headerLabel: { fontSize: 14, color: '#757575' },
  headerTitle: { fontSize: 16, fontWeight: '600', color: '#1e1e1e' },
  scrollContent: { padding: 20, paddingBottom: 100 },
  scheduleRow: { flexDirection: 'row', marginBottom: 20 },
  pinkLine: { width: 5, backgroundColor: '#fe76a8', marginRight: 15, borderRadius: 2 },
  scheduleContent: { flex: 1 },
  subject: { fontSize: 16, fontWeight: '700', fontStyle: 'italic', marginBottom: 2 },
  grade: { fontSize: 14, marginBottom: 2 },
  time: { fontSize: 14, color: '#000', marginBottom: 10 },
  lessonTitle: { fontSize: 14, color: 'rgba(0,0,0,0.56)', textAlign: 'center', marginBottom: 10 },
  subBox: { padding: 10, borderRadius: 3, borderWidth: 1, marginBottom: 10, alignItems: 'center' },
  greenBox: { borderColor: '#8ebda7' },
  purpleBox: { borderColor: '#aeb6e6' },
  subBoxText: { fontSize: 12, color: 'rgba(0,0,0,0.56)' },
  contentBox: { borderWidth: 1, borderColor: 'rgba(0,0,0,0.03)', borderRadius: 4, padding: 15, backgroundColor: '#fff', elevation: 1 },
  contentText: { fontSize: 12, lineHeight: 14, textAlign: 'justify', marginBottom: 20 },
  screenshotRow: { flexDirection: 'row', justifyContent: 'space-around' },
  screenshotPlaceholder: { width: 50, height: 50, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center' },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 70, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#d9d9d9' },
  navItem: { alignItems: 'center' },
  navLabel: { fontSize: 10, color: '#757575', marginTop: 4 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(113, 113, 113, 0.3)', justifyContent: 'flex-end' },
  modalContent: { marginBottom: 80, marginHorizontal: 10 },
});