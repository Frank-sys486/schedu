import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ChevronRightIcon from '@/assets/dashboard/icons/Chevrons right.svg';
import UserIcon from '@/assets/dashboard/icons/User.svg';

const ford22 = require('@/assets/dashboard/images/ford-2 2.png');
const s11 = require('@/assets/dashboard/images/S (1) 1.png');
//const screenshot1 = require('@/assets/dashboard/images/Screenshot 2025-10-11 at 1.06.55 PM 1.png');
//const screenshot2 = require('@/assets/dashboard/images/Screenshot 2025-10-11 at 1.07.33 PM 1.png');

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image source={s11} style={styles.logo} />
          <Text style={styles.headerTitle}>SCHEDU</Text>
          <View style={styles.userIconContainer}>
            <UserIcon width={28} height={30} color="#B3B3B3" />
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.menuHeader}>
            <Text style={styles.menuHeaderTextSmall}>Upcoming</Text>
            <Text style={styles.menuHeaderTextStrong}>Friday, October 30</Text>
          </View>

          <View style={styles.scheduleItem}>
            <View style={styles.scheduleIndicator} />
            <View style={styles.scheduleDetails}>
              <Text style={styles.subject}>MAT10</Text>
              <Text style={styles.grade}>Grade 10 - Newton</Text>
              <Text style={styles.time}>11:30 AM to 1:30 PM</Text>
            </View>
            <View style={styles.lessonDetails}>
              <View style={styles.lessonBox}>
                <Text style={styles.lessonText}>Lesson 3: Polynomials</Text>
              </View>
              <View style={[styles.lessonBox, { borderColor: '#aeb6e6' }]}>
                <Text style={styles.lessonText}>SW 3: Polynomials</Text>
              </View>
            </View>
          </View>

          <View style={styles.scheduleItem}>
            <View style={styles.scheduleIndicator} />
            <View style={styles.scheduleDetails}>
              <Text style={styles.subject}>MAT10</Text>
              <Text style={styles.grade}>Grade 10 - Einstein</Text>
              <Text style={styles.time}>3:00 PM to 4:00 PM</Text>
            </View>
             <View style={styles.lessonDetails}>
                <View style={[styles.lessonBox, {height: 43}]}>
                    <Text style={styles.lessonText}>Lesson 4: Quadratic Function</Text>
                </View>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.menuHeader}>
            <Text style={styles.menuHeaderTextSmall}>Overview</Text>
            <Text style={styles.menuHeaderTextStrong}>Lesson 3: Polynomials</Text>
            <ChevronRightIcon style={styles.chevron} width={16} height={16} color="black" />
          </View>

          <View style={styles.contentBox}>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>A polynomial</Text> is a mathematical expression composed of variables, coefficients, and exponents...
            </Text>
            <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Types of polynomials:</Text>
            <Text>• Monomial: A polynomial with one term</Text>
            <Text>• Binomial: A polynomial with two terms</Text>
            <Text>• Trinomial: A polynomial with three terms</Text>
            <View style={styles.screenshotsContainer}>
                {/*<Image source={screenshot1} style={styles.screenshot} /> */}
                {/*<Image source={screenshot2} style={styles.screenshot} /> */}
            </View>
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
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#d9d9d9',
    },
    logo: {
        width: 36,
        height: 36,
    },
    headerTitle: {
        fontSize: 33,
        fontWeight: '300',
        color: '#b3b3b3',
        marginLeft: 10,
    },
    userIconContainer: {
        marginLeft: 'auto',
    },
    body: {
        padding: 20,
    },
    menuHeader: {
        marginBottom: 20,
    },
    menuHeaderTextSmall: {
        fontSize: 14,
        color: '#757575',
    },
    menuHeaderTextStrong: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1e1e1e',
    },
    scheduleItem: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    scheduleIndicator: {
        width: 5,
        height: 75,
        backgroundColor: '#fe76a8',
        marginRight: 10,
    },
    scheduleDetails: {
        flex: 1,
    },
    subject: {
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    grade: {
        fontSize: 12,
        color: '#000',
    },
    time: {
        fontSize: 12,
        color: '#000',
    },
    lessonDetails: {
        flex: 1,
        marginLeft: 20
    },
    lessonBox: {
        borderWidth: 1,
        borderColor: '#8ebda7',
        borderRadius: 3,
        padding: 5,
        marginBottom: 5,
        width: 143,
        height: 30,
        justifyContent: 'center'
    },
    lessonText: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.56)',
        textAlign: 'center'
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(217, 217, 217, 0.17)',
        marginVertical: 20,
    },
    chevron: {
        position: 'absolute',
        right: 0,
        top: '50%',
    },
    contentBox: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.03)',
        borderRadius: 4,
        padding: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    screenshotsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    screenshot: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    }
});
