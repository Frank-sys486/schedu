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
          tabBarStyle: {
            borderTopWidth: 1,
            borderTopColor: '#d9d9d9',
            height: 60,
            paddingBottom: 10,
          }
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <HomeIcon color={color} width={28} height={28} />,
          }}
        />
        <Tabs.Screen
          name="calendar/index"
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
              e.preventDefault();
              setCreateModalVisible(true);
            },
          }}
        />
        <Tabs.Screen
          name="library/index"
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

        {/* Hide detail routes from the Tab Bar */}
        <Tabs.Screen
          name="calendar/[date]"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="library/[id]"
          options={{
            href: null,
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
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'flex-end',
        paddingBottom: 80, 
    },
    modalContent: {
        alignItems: 'center',
    }
});
