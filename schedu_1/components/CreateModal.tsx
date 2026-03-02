import SubjectIcon from '@/assets/dashboard/icons/Book open.svg';
import NotesIcon from '@/assets/dashboard/icons/Bookmark.svg';
import LessonPlanIcon from '@/assets/dashboard/icons/Calendar.svg';
import ActivitiesIcon from '@/assets/dashboard/icons/Plus.svg';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CreateModal({ onClose }: { onClose?: () => void }) {
  const router = useRouter();

  const handlePressSubject = () => {
    onClose?.();
    router.push('/create-subject');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.item}>
             <View style={[styles.iconBox, { backgroundColor: 'rgba(142, 189, 167, 0.3)' }]}>
                <LessonPlanIcon width={24} height={24} color="#43553c" />
             </View>
             <Text style={styles.label}>Lessonplan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={handlePressSubject}>
             <View style={[styles.iconBox, { backgroundColor: 'rgba(155, 216, 130, 0.3)' }]}>
                <SubjectIcon width={24} height={24} color="#43553c" />
             </View>
             <Text style={styles.label}>Subject</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.item}>
             <View style={[styles.iconBox, { backgroundColor: 'rgba(126, 217, 87, 0.3)' }]}>
                <NotesIcon width={24} height={24} color="#43553c" />
             </View>
             <Text style={styles.label}>Notes</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.item}>
             <View style={[styles.iconBox, { backgroundColor: 'rgba(134, 180, 114, 0.3)' }]}>
                <ActivitiesIcon width={24} height={24} color="#43553c" />
             </View>
             <Text style={styles.label}>Activities</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 17,
    padding: 15,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    width: '95%',
    // Shadow from reference
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 5,
    gap: 10,
  },
  item: {
    alignItems: 'center',
    gap: 8,
  },
  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 11,
    color: '#43553c',
    fontFamily: 'System', // Inter in design
  }
});
