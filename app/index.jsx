import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { BottomNavigation } from '../components'

const Home = () => {
  const [activeTab, setActiveTab] = useState('Home')

  const handleTabChange = (tabName) => {
    setActiveTab(tabName)
    console.log('Active tab:', tabName)
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
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        {renderContent()}
      </View>
      <BottomNavigation onTabChange={handleTabChange} />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  }
})