import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

const BottomNavigation = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('Home')

  const tabs = [
    {
      name: 'Home',
      icon: 'home-outline',
      activeIcon: 'home',
      iconLibrary: 'Ionicons'
    },
    {
      name: 'Journey',
      icon: 'map-outline',
      activeIcon: 'map',
      iconLibrary: 'Ionicons'
    },
    {
      name: 'Report',
      icon: 'document-text-outline',
      activeIcon: 'document-text',
      iconLibrary: 'Ionicons'
    },
    {
      name: 'Profile',
      icon: 'person-outline',
      activeIcon: 'person',
      iconLibrary: 'Ionicons'
    }
  ]

  const handleTabPress = (tabName) => {
    setActiveTab(tabName)
    if (onTabChange) {
      onTabChange(tabName)
    }
  }

  const renderIcon = (tab, isActive) => {
    const iconName = isActive ? tab.activeIcon : tab.icon
    const IconComponent = tab.iconLibrary === 'Ionicons' ? Ionicons : MaterialIcons
    
    return (
      <IconComponent 
        name={iconName} 
        size={24} 
        color={isActive ? '#4A90E2' : '#8E8E93'} 
      />
    )
  }

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tabItem}
            onPress={() => handleTabPress(tab.name)}
            activeOpacity={0.7}
          >
            {renderIcon(tab, isActive)}
            <Text style={[
              styles.tabLabel,
              { color: isActive ? '#4A90E2' : '#8E8E93' }
            ]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  }
})