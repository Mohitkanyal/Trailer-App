import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const listingsDetails = () => {
    const {id}=useLocalSearchParams();
  return (
    <View>
      <Text>listingsDetails {id}</Text>
    </View>
  )
}

export default listingsDetails