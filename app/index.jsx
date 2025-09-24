import { StyleSheet, Text, View, Alert, SafeAreaView, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { BottomNavigation, TopBar } from '../components'

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
        return <Text style={styles.content}>Home Screen Content</Text>
      case 'Journey':
        return <Text style={styles.content}>Journey Screen Content</Text>
      case 'Report':
        return <Text style={styles.content}>Report Screen Content</Text>
      case 'Profile':
        return <Text style={styles.content}>Profile Screen Content</Text>
      default:
        return <Text style={styles.content}>Home Screen Content</Text>
    }
  }

  return (
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
  )
}

export default Home

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  content: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  }
})