import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CreateModal() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.item, { backgroundColor: 'rgba(142, 189, 167, 0.3)' }]}>
             <Ionicons name="book-outline" size={28} color="#43553c" />
             <Text style={styles.label}>Subject</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.item, { backgroundColor: 'rgba(155, 216, 130, 0.3)' }]}>
             <Ionicons name="create-outline" size={28} color="#43553c" />
             <Text style={styles.label}>Notes</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.item, { backgroundColor: 'rgba(126, 217, 87, 0.3)' }]}>
             <Ionicons name="grid-outline" size={28} color="#43553c" />
             <Text style={styles.label}>Lessonplan</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.item, { backgroundColor: 'rgba(134, 180, 114, 0.3)' }]}>
             <Ionicons name="cube-outline" size={28} color="#43553c" />
             <Text style={styles.label}>Activities</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 17,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    width: 80,
    height: 70,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  label: {
    fontSize: 11,
    color: '#43553c',
    fontFamily: 'System', // Inter in design
  }
});