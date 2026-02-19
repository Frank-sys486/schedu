import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';

import LibraryIcon from '@/assets/dashboard/icons/Book open.svg';
import PlansIcon from '@/assets/dashboard/icons/Bookmark.svg';
import CalendarIcon from '@/assets/dashboard/icons/Calendar.svg';
import HomeIcon from '@/assets/dashboard/icons/Home.svg';
import PlusIcon from '@/assets/dashboard/icons/Plus.svg';
import CreateModal from '@/components/CreateModal';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isCreateModalVisible, setCreateModalVisible] = useState(false);
  
  return (
    <>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} width={28} height={28} />,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color }) => <CalendarIcon color={color} width={28} height={28} />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          tabBarIcon: ({ color }) => <PlusIcon color={color} width={28} height={28} />,
        }}
        listeners={{
          tabPress: (e) => {
            // Prevent default action (navigation to the screen)
            e.preventDefault();
            // Open the modal instead
            setCreateModalVisible(true);
          },
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          tabBarIcon: ({ color }) => <LibraryIcon color={color} width={28} height={28} />,
        }}
      />
      <Tabs.Screen
        name="plans"
        options={{
          title: 'Plans',
          tabBarIcon: ({ color }) => <PlansIcon color={color} width={28} height={28} />,
        }}
      />
    </Tabs>

    <Modal
        animationType="fade"
        transparent={true}
        visible={isCreateModalVisible}
        onRequestClose={() => setCreateModalVisible(false)}
      >
        <TouchableOpacity 
            style={styles.modalOverlay} 
            activeOpacity={1} 
            onPress={() => setCreateModalVisible(false)}
        >
            <View style={styles.modalContent}>
                <CreateModal onClose={() => setCreateModalVisible(false)} />
            </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(113, 113, 113, 0.3)', // Overlay color from reference
        justifyContent: 'flex-end',
        paddingBottom: 90, // Position above tab bar
    },
    modalContent: {
        alignItems: 'center',
    }
});
