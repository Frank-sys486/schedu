import CheckIcon from '@/assets/icons/Check.svg';
import PlusIcon from '@/assets/icons/Plus.svg';
import UserIcon from '@/assets/icons/User.svg';
import ChevronsRight from '@/assets/dashboard/icons/Chevrons right.svg';
import ArrowDropDownIcon from '@/assets/icons/arrow_drop_down.svg';
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
    Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CreateLessonPlanScreen() {
  const router = useRouter();

  // --- STATE MANAGEMENT ---
  const [formData, setFormData] = useState({
    academicYear: '',
    termCategory: '',
    durationFrom: '',
    durationTo: '',
    subject: '',
    section: '',
    writtenWork: '',
    performanceTask: '',
    exam: '',
    extraRequirements: ''
  });

  const [showDuration, setShowDuration] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const fullDays: { [key: string]: string } = { 
    'Mon': 'monday', 'Tue': 'tuesday', 'Wed': 'wednesday', 'Thu': 'thursday', 'Fri': 'friday', 'Sat': 'saturday' 
  };
  
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [schedules, setSchedules] = useState<{ [key: string]: any[] }>({});
  const [typePromptDay, setTypePromptDay] = useState<string | null>(null);
  const [activeTimePicker, setActiveTimePicker] = useState<{ day: string, id: number, field: string } | null>(null);
  const [specialDates, setSpecialDates] = useState<any[]>([]);
  const [newSpecialDate, setNewSpecialDate] = useState('');
  const [newSpecialReason, setNewSpecialReason] = useState('');

  // --- HANDLERS ---
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleDay = (day: string) => {
    setSelectedDays(prev => {
      if (prev.includes(day)) {
        const newSchedules = { ...schedules };
        delete newSchedules[day];
        setSchedules(newSchedules);
        return prev.filter(d => d !== day);
      }
      return [...prev, day];
    });
  };

  const confirmAddBlock = (day: string, type: string) => {
    setSchedules(prev => ({
      ...prev,
      [day]: [...(prev[day] || []), { id: Date.now(), start: '', end: '', type }]
    }));
    setTypePromptDay(null);
  };

  const updateScheduleBlock = (day: string, id: number, field: string, value: string) => {
    setSchedules(prev => ({
      ...prev,
      [day]: prev[day].map(block => block.id === id ? { ...block, [field]: value } : block)
    }));
  };

  const removeScheduleBlock = (day: string, id: number) => {
    setSchedules(prev => ({
      ...prev,
      [day]: prev[day].filter(block => block.id !== id)
    }));
  };

  const addSpecialDate = () => {
    if (newSpecialDate.trim() && newSpecialReason.trim()) {
      setSpecialDates(prev => [...prev, { id: Date.now(), date: newSpecialDate, reason: newSpecialReason }]);
      setNewSpecialDate('');
      setNewSpecialReason('');
    }
  };

  const removeSpecialDate = (id: number) => {
    setSpecialDates(prev => prev.filter(item => item.id !== id));
  };

  const times = ['7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM'];

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Overlay to close popups */}
      {(typePromptDay || activeTimePicker) && (
        <Pressable 
            style={[StyleSheet.absoluteFill, { zIndex: 900 }]} 
            onPress={() => { setTypePromptDay(null); setActiveTimePicker(null); }} 
        />
      )}

      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/images/ford-2 2.png')} style={styles.logo} />
        <Text style={styles.headerText}>SCHEDU</Text>
        <View style={styles.userIconContainer}>
            <UserIcon width={28} height={28} color="#B3B3B3" />
        </View>
      </View>
      <View style={styles.dividerHeader} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Title Row */}
        <View style={styles.titleRow}>
          <View style={styles.titleWithBack}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <View style={{ transform: [{ rotate: '180deg' }] }}>
                    <ChevronsRight width={24} height={24} color="black" />
                </View>
            </TouchableOpacity>
            <Text style={styles.pageTitle}>Create Lessonplan</Text>
          </View>
          <TouchableOpacity onPress={() => console.log('Saved Data')}>
            <CheckIcon width={24} height={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Overview Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Overview</Text>
          
          <View style={styles.row}>
            <TextInput 
              style={[styles.input, styles.flex1]} 
              placeholder="Academic Year" 
              placeholderTextColor="#C4C4C4"
              value={formData.academicYear}
              onChangeText={(val) => handleInputChange('academicYear', val)}
            />
            <View style={[styles.flex1, styles.marginHorizontal]}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputText}>{formData.termCategory || "Term & Category"}</Text>
                    <ArrowDropDownIcon width={12} height={12} color="#C4C4C4" />
                </View>
            </View>
            <TouchableOpacity 
              onPress={() => setShowDuration(!showDuration)}
              style={[styles.flex1, styles.toggleButton, showDuration && styles.toggleButtonActive]}
            >
              <Text style={[styles.toggleButtonText, showDuration && styles.toggleButtonTextActive]}>Duration</Text>
            </TouchableOpacity>
          </View>

          {showDuration && (
            <View style={styles.durationRow}>
              <Text style={styles.hintText}>from</Text>
              <TextInput 
                style={styles.dateInput} 
                placeholder="MM/DD/YYYY" 
                value={formData.durationFrom}
                onChangeText={(val) => handleInputChange('durationFrom', val)}
              />
              <Text style={styles.hintText}>to</Text>
              <TextInput 
                style={styles.dateInput} 
                placeholder="MM/DD/YYYY" 
                value={formData.durationTo}
                onChangeText={(val) => handleInputChange('durationTo', val)}
              />
            </View>
          )}

          <View style={styles.row}>
            <TextInput 
              style={[styles.input, styles.flexHalf]} 
              placeholder="Subject" 
              placeholderTextColor="#C4C4C4"
              value={formData.subject}
              onChangeText={(val) => handleInputChange('subject', val)}
            />
            <TextInput 
              style={[styles.input, styles.flexHalf, styles.marginLeft]} 
              placeholder="Section" 
              placeholderTextColor="#C4C4C4"
              value={formData.section}
              onChangeText={(val) => handleInputChange('section', val)}
            />
          </View>

          <TouchableOpacity 
            onPress={() => setShowSchedule(!showSchedule)}
            style={[styles.fullWidth, styles.scheduleMainBtn, showSchedule && styles.scheduleMainBtnActive]}
          >
            <Text style={[styles.scheduleMainBtnText, showSchedule && styles.scheduleMainBtnTextActive]}>Schedule</Text>
          </TouchableOpacity>

          {showSchedule && (
            <View style={styles.scheduleContainer}>
              <View style={styles.daysRow}>
                {daysOfWeek.map((day) => (
                  <TouchableOpacity 
                    key={day} 
                    onPress={() => toggleDay(day)}
                    style={[styles.dayBtn, selectedDays.includes(day) && styles.dayBtnActive]}
                  >
                    <Text style={[styles.dayBtnText, selectedDays.includes(day) && styles.dayBtnTextActive]}>{day}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              {selectedDays.map(day => (
                <View key={day} style={styles.dayScheduleRow}>
                  <Text style={styles.dayLabel}>{fullDays[day]}</Text>
                  <View style={styles.blocksContainer}>
                    {schedules[day]?.map((block, index) => (
                      <View key={block.id} style={styles.blockWrapper}>
                        <View style={[styles.imageScheduleBlock, block.type === 'Laboratory' ? styles.redBorder : styles.blueBorder]}>
                          <TouchableOpacity 
                            onPress={() => setActiveTimePicker({ day, id: block.id, field: 'start' })}
                            style={styles.timePill}
                          >
                            <Text style={styles.timeText}>{block.start || "8AM"}</Text>
                          </TouchableOpacity>
                          <Text style={styles.toText}>to</Text>
                          <TouchableOpacity 
                            onPress={() => setActiveTimePicker({ day, id: block.id, field: 'end' })}
                            style={styles.timePill}
                          >
                            <Text style={styles.timeText}>{block.end || "10AM"}</Text>
                          </TouchableOpacity>
                          
                          {activeTimePicker?.day === day && activeTimePicker?.id === block.id && (
                            <View style={styles.timePickerPopup}>
                                <ScrollView nestedScrollEnabled>
                                    {times.map(t => (
                                        <TouchableOpacity 
                                            key={t} 
                                            onPress={() => {
                                                updateScheduleBlock(day, block.id, activeTimePicker.field, t);
                                                setActiveTimePicker(null);
                                            }}
                                            style={styles.timeOption}
                                        >
                                            <Text style={styles.timeOptionText}>{t}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </View>
                          )}

                          <TouchableOpacity 
                            onPress={() => removeScheduleBlock(day, block.id)}
                            style={styles.removeBlockBtn}
                          >
                            <Text style={styles.removeBlockText}>×</Text>
                          </TouchableOpacity>
                        </View>
                        <Text style={styles.plusIconSeparator}> + </Text>
                      </View>
                    ))}
                    
                    <View style={styles.addBlockWrapper}>
                        <TouchableOpacity onPress={() => setTypePromptDay(day)} style={styles.addTimeBtn}>
                            <Text style={styles.addTimeText}>add time</Text>
                        </TouchableOpacity>
                        {typePromptDay === day && (
                            <View style={styles.typePopup}>
                                <TouchableOpacity onPress={() => confirmAddBlock(day, 'Lecture')} style={styles.typeOption}>
                                    <Text style={styles.typeText}>lecture</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => confirmAddBlock(day, 'Laboratory')} style={styles.typeOption}>
                                    <Text style={styles.typeText}>laboratory</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>

        <View style={styles.divider} />

        {/* Requirements Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Minimum Requirements</Text>
          <View style={styles.reqRow}>
            <View style={styles.reqBlock}>
                <Text style={styles.reqBlockText}>Written Work</Text>
            </View>
            <View style={styles.reqBlock}>
                <Text style={styles.reqBlockText}>Performance Task</Text>
            </View>
            <View style={styles.reqBlock}>
                <Text style={styles.reqBlockText}>Exam</Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Extra Requirements</Text>
          <TextInput 
            style={styles.textArea} 
            placeholder="(1 Seatwork per Lesson, 1 activity per laboratory session, one long project making week, etc.)"
            placeholderTextColor="#C4C4C4"
            multiline={true}
          />
        </View>

        <View style={styles.divider} />

        {/* Special Dates */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Special Dates (Optional)</Text>
          <View style={styles.rowAlignCenter}>
            <TextInput 
              style={styles.dateChipInput} 
              placeholder="MM/DD/YYYY"
              value={newSpecialDate}
              onChangeText={setNewSpecialDate}
            />
            <TextInput 
              style={[styles.input, styles.flex1, styles.marginLeft]} 
              placeholder="Reason" 
              placeholderTextColor="#C4C4C4"
              value={newSpecialReason}
              onChangeText={setNewSpecialReason}
            />
            <TouchableOpacity onPress={addSpecialDate} style={styles.plusButton}>
              <PlusIcon width={20} height={20} color={newSpecialDate && newSpecialReason ? "#61C247" : "#C4C4C4"} />
            </TouchableOpacity>
          </View>

          {specialDates.map(item => (
            <View key={item.id} style={styles.addedDateCard}>
                <View style={styles.addedDateContent}>
                    <Text style={styles.addedDateValue}>{item.date}</Text>
                    <Text style={styles.addedReasonValue}>{item.reason}</Text>
                </View>
                <TouchableOpacity onPress={() => removeSpecialDate(item.id)}>
                    <Text style={styles.removeX}>×</Text>
                </TouchableOpacity>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingBottom: 15 },
  logo: { width: 39, height: 39 },
  headerText: { fontSize: 33, fontWeight: '300', color: '#B3B3B3', marginLeft: 10 },
  userIconContainer: { marginLeft: 'auto' },
  dividerHeader: { height: 1, backgroundColor: '#F3F4F6', width: '100%' },
  scrollContent: { paddingBottom: 100 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginVertical: 20 },
  titleWithBack: { flexDirection: 'row', alignItems: 'center' },
  backButton: { marginRight: 8 },
  pageTitle: { fontSize: 18, fontWeight: '700', color: '#000' },
  section: { paddingHorizontal: 20, marginBottom: 20 },
  sectionLabel: { fontSize: 16, color: '#000', fontWeight: '400', marginBottom: 15 },
  row: { flexDirection: 'row', marginBottom: 10 },
  rowAlignCenter: { flexDirection: 'row', alignItems: 'center' },
  input: { backgroundColor: '#F9F9F9', borderRadius: 8, height: 44, fontSize: 12, color: '#000', textAlign: 'center', paddingHorizontal: 10, borderWidth: 1, borderColor: '#F0F0F0' },
  inputWrapper: { backgroundColor: '#F9F9F9', borderRadius: 8, height: 44, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, borderWidth: 1, borderColor: '#F0F0F0' },
  inputText: { fontSize: 12, color: '#C4C4C4' },
  flex1: { flex: 1 },
  flexHalf: { width: '48.5%' },
  fullWidth: { width: '100%' },
  marginHorizontal: { marginHorizontal: 10 },
  marginLeft: { marginLeft: 10 },
  toggleButton: { backgroundColor: '#F9F9F9', borderRadius: 8, height: 44, justifyContent: 'center', alignItems: 'center' },
  toggleButtonActive: { backgroundColor: '#7A7A7A' },
  toggleButtonText: { fontSize: 12, color: '#C4C4C4' },
  toggleButtonTextActive: { color: '#fff' },
  scheduleMainBtn: { backgroundColor: '#828282', borderRadius: 4, height: 44, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  scheduleMainBtnActive: { backgroundColor: '#828282' },
  scheduleMainBtnText: { color: '#fff', fontSize: 16, fontWeight: '400' },
  scheduleMainBtnTextActive: { color: '#fff' },
  durationRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 15, paddingHorizontal: 5 },
  hintText: { fontSize: 10, color: '#A1A1A1' },
  dateInput: { flex: 1, borderColor: '#E5E7EB', borderWidth: 1, borderRadius: 20, height: 34, fontSize: 11, textAlign: 'center', color: '#888', backgroundColor: '#fff' },
  scheduleContainer: { marginTop: 5 },
  daysRow: { flexDirection: 'row', gap: 6, marginBottom: 20 },
  dayBtn: { flex: 1, height: 36, borderRadius: 6, borderWidth: 1, borderColor: '#E5E7EB', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  dayBtnActive: { backgroundColor: '#D9D9D9', borderColor: 'transparent' },
  dayBtnText: { fontSize: 14, color: '#C4C4C4' },
  dayBtnTextActive: { color: '#fff' },
  dayScheduleRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  dayLabel: { width: 85, fontSize: 14, color: '#888', fontWeight: '400' },
  blocksContainer: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' },
  blockWrapper: { flexDirection: 'row', alignItems: 'center' },
  andText: { fontSize: 12, color: '#888', marginHorizontal: 6 },
  imageScheduleBlock: { flexDirection: 'row', alignItems: 'center', padding: 4, borderRadius: 6, borderWidth: 1, backgroundColor: '#fff', position: 'relative' },
  blueBorder: { borderColor: '#75A5E3' },
  redBorder: { borderColor: '#E37575' },
  timePill: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 4, minWidth: 60, alignItems: 'center' },
  timeText: { fontSize: 12, color: '#888' },
  toText: { fontSize: 12, color: '#888', marginHorizontal: 6 },
  removeBlockBtn: { position: 'absolute', top: -10, right: -5, width: 18, height: 18, borderRadius: 9, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 2 },
  removeBlockText: { fontSize: 14, color: '#FF8080' },
  addBlockWrapper: { flexDirection: 'row', alignItems: 'center', position: 'relative' },
  plusIconSeparator: { fontSize: 14, color: '#888', marginHorizontal: 5 },
  addTimeBtn: { paddingVertical: 5 },
  addTimeText: { fontSize: 14, color: '#888', fontWeight: '400' },
  typePopup: { position: 'absolute', top: 35, left: 0, width: 120, backgroundColor: '#ffffff', borderRadius: 4, borderWidth: 1, borderColor: '#DDD', zIndex: 1000, elevation: 10 },
  typeOption: { alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#F5F5F5', backgroundColor: '#fff' },
  typeText: { fontSize: 14, color: '#888' },
  timePickerPopup: { position: 'absolute', top: 40, left: 0, width: 70, height: 160, backgroundColor: '#ffffff', borderRadius: 8, elevation: 15, zIndex: 1100, borderWidth: 1, borderColor: '#EEE' },
  timeOption: { padding: 12, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#F9F9F9', backgroundColor: '#fff' },
  timeOptionText: { fontSize: 11, color: '#666' },
  reqRow: { flexDirection: 'row', gap: 10 },
  reqBlock: { flex: 1, height: 50, backgroundColor: '#FBFBFB', borderRadius: 4, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#F5F5F5' },
  reqBlockText: { fontSize: 12, color: '#C4C4C4', textAlign: 'center' },
  textArea: { backgroundColor: '#F9F9F9', borderRadius: 8, fontSize: 12, color: '#888', padding: 12, height: 110, textAlignVertical: 'top', fontStyle: 'italic', borderWidth: 1, borderColor: '#F0F0F0' },
  divider: { borderTopWidth: 1, borderTopColor: '#F3F4F6', marginHorizontal: 20, marginVertical: 15 },
  dateChipInput: { width: 115, height: 38, backgroundColor: '#fff', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 20, textAlign: 'center', fontSize: 11, color: '#888' },
  plusButton: { padding: 5, marginLeft: 8 },
  addedDateCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FBFBFB', padding: 12, borderRadius: 10, marginTop: 10, borderWidth: 1, borderColor: '#F0F0F0' },
  addedDateContent: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  addedDateValue: { fontSize: 11, color: '#888', fontWeight: '700', width: 85 },
  addedReasonValue: { flex: 1, fontSize: 12, color: '#666', borderLeftWidth: 1, borderLeftColor: '#EEE', paddingLeft: 12 },
  removeX: { fontSize: 20, color: '#FF8080', fontWeight: '300', paddingHorizontal: 5 }
});
