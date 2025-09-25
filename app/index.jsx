import { StyleSheet, Text, View, Alert, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { BottomNavigation, TopBar } from '../components'
import { HomeScreen, ReportScreen } from '../screens'

const Home = () => {
  const [activeTab, setActiveTab] = useState('Home')

  // Add error handling for async operations (web only)
  useEffect(() => {
    // Only add web-specific error handling on web platform
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      // Handle unhandled promise rejections
      const handleUnhandledRejection = (event) => {
        console.warn('Unhandled promise rejection:', event.reason)
        // Prevent the error from crashing the app
        event.preventDefault()
      }

      window.addEventListener('unhandledrejection', handleUnhandledRejection)
      return () => {
        window.removeEventListener('unhandledrejection', handleUnhandledRejection)
      }
    }
  }, [])

  const handleTabChange = (tabName) => {
    setActiveTab(tabName)
  }

  const handleProfilePress = () => {
    setActiveTab('Profile')
  }

  const handleNotificationPress = () => {
    Alert.alert('Notifications', 'You have no new notifications')
  }

  const renderContent = () => {
    switch(activeTab) {
      case 'Home':
        return <HomeScreen />
      case 'Journey':
        return <Text style={styles.content}>Journey Screen Content</Text>
      case 'Report':
        return <ReportScreen />
      case 'Chat':
        return <Text style={styles.content}>Chat Screen Content</Text>
      case 'Profile':
        return <Text style={styles.content}>Profile Screen Content</Text>
      default:
        return <HomeScreen />
    }
  }

  return (
    <SafeAreaProvider>
      <View style={styles.outerContainer}>
        <StatusBar style="dark" translucent={false} />
        <SafeAreaView style={styles.container}>
          <TopBar 
            onProfilePress={handleProfilePress}
            onNotificationPress={handleNotificationPress}
          />
          <View style={styles.mainContent}>
            {renderContent()}
          </View>
          <BottomNavigation 
            onTabChange={handleTabChange} 
            activeTab={activeTab}
          />
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  )
}

export default Home

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0,
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  content: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  }
})