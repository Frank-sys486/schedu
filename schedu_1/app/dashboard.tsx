import BookOpenIcon from '@/assets/icons/Book open.svg';
import BookmarkIcon from '@/assets/icons/Bookmark.svg';
import CalendarIcon from '@/assets/icons/Calendar.svg';
import HomeIcon from '@/assets/icons/Home.svg';
import PlusIcon from '@/assets/icons/Plus.svg';
import { Stack, Link } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Header Section */}
      <View style={styles.header}>
        {/* Replicating the header layout from Figma */}
        <View style={styles.headerContent}>
             {/* Placeholder for ford22/S11 images */}
            <View style={styles.logoPlaceholder} />
            <Text style={styles.headerTitle}>SCHEDU</Text>
        </View>
        <View style={styles.divider} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <Link href="/choose-subject" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Go to Choose Subject</Text>
          </TouchableOpacity>
        </Link>

        {/* Schedule Item 1: MAT10 Newton */}
        <View style={styles.scheduleContainer}>
            {/* The Pink Vertical Line (Line6) */}
            <View style={styles.verticalLinePink} />
            
            <View style={styles.scheduleDetails}>
                <Text style={styles.subjectCode}>MAT10</Text>
                <Text style={styles.sectionName}>Grade 10 - Newton</Text>
                <Text style={styles.timeText}>11:30 AM to 1:30 PM</Text>
                
                <View style={styles.lessonContainer}>
                    <Text style={styles.lessonTitle}>Lesson 3: Polynomials</Text>
                </View>

                {/* Sub Items (Rectangles) */}
                {/* Rectangle 5 - Green Border */}
                <View style={[styles.subItemCard, styles.borderGreen]}>
                    <Text style={styles.subItemText}>Lesson 4: Quadratic Function</Text>
                </View>

                {/* Rectangle 6 - Purple Border (SW 3) */}
                 <View style={[styles.subItemCard, styles.borderPurple]}>
                    <Text style={styles.subItemText}>SW 3: Polynomials</Text>
                </View>
            </View>
        </View>

        {/* Schedule Item 2: MAT10 Einstein */}
        <View style={styles.scheduleContainer}>
             {/* Pink Line */}
            <View style={styles.verticalLinePink} />
            <View style={styles.scheduleDetails}>
                <Text style={styles.subjectCode}>MAT10</Text>
                <Text style={styles.sectionName}>Grade 10 - Einstein</Text>
                <Text style={styles.timeText}>3:00 PM to 4:00 PM</Text>
            </View>
        </View>

        {/* Long Text Content (Polynomials Definition) */}
        {/* Rectangle 11 in CSS */}
        <View style={styles.contentCard}>
            <Text style={styles.contentText}>
                A polynomial is a mathematical expression composed of variables, coefficients, and exponents, involving only the operations of addition, subtraction, and multiplication. It consists of a finite number of terms, where each term is a constant or a product of a constant and one or more variables raised to a non-negative integer power. The highest exponent in a polynomial determines its degree.
                {'\n\n'}
                Types of polynomials:
                {'\n'}• Monomial: A polynomial with one term
                {'\n'}• Binomial: A polynomial with two terms
                {'\n'}• Trinomial: A polynomial with three terms
            </Text>
            
            {/* Placeholders for Screenshots */}
            <View style={styles.imageRow}>
                <View style={styles.imagePlaceholder}>
                    <Text style={styles.placeholderText}>Screenshot 1</Text>
                </View>
                <View style={styles.imagePlaceholder}>
                    <Text style={styles.placeholderText}>Screenshot 2</Text>
                </View>
            </View>
        </View>

      </ScrollView>

      {/* Bottom Nav (Visual Only) */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
             <HomeIcon width={24} height={24} color="#333" />
        </View>
        <View style={styles.navItem}>
             <CalendarIcon width={24} height={24} color="#999" />
        </View>
        <View style={styles.navItem}>
             <PlusIcon width={40} height={40} color="#999" style={{ marginTop: -10 }} />
        </View>
        <View style={styles.navItem}>
             <BookOpenIcon width={24} height={24} color="#999" />
        </View>
        <View style={styles.navItem}>
             <BookmarkIcon width={24} height={24} color="#999" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logoPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: '#ccc',
    borderRadius: 20,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 32, // Scaled from 121px
    fontWeight: '300',
    color: '#B3B3B3',
    letterSpacing: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#D9D9D9',
    width: '100%',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
   button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
_mod_fontWeight: 'bold',
  },
  scheduleContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  verticalLinePink: {
    width: 4,
    backgroundColor: '#FE76A8', // Pink from CSS
    marginRight: 15,
    borderRadius: 2,
  },
  scheduleDetails: {
    flex: 1,
  },
  subjectCode: {
    fontSize: 18, // Scaled from 59px
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#000',
    marginBottom: 4,
  },
  sectionName: {
    fontSize: 14, // Scaled from 44px
    color: '#000',
    marginBottom: 2,
  },
  timeText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
  },
  lessonContainer: {
    marginBottom: 10,
  },
  lessonTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  subItemCard: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  borderGreen: {
    borderColor: '#8EBDA6', // Green from CSS
  },
  borderPurple: {
    borderColor: '#ADB6E6', // Purple from CSS
  },
  subItemText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  contentCard: {
    borderWidth: 1,
    borderColor: '#000', // Rectangle 11 border
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  contentText: {
    fontSize: 14, // Scaled from 36px
    lineHeight: 20,
    color: '#000',
    textAlign: 'justify',
    marginBottom: 20,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  placeholderText: {
    color: '#888',
    fontSize: 10,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingBottom: 20,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});