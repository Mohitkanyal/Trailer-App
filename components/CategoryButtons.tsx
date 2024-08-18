import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { ScrollView } from 'react-native-gesture-handler'
import destinationCategories from '@/data/categories'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const CategoryButtons = () => {
  return (
    <GestureHandlerRootView>
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
        gap:20,
        paddingVertical:10,
        marginBottom:10,
      }}>
        {destinationCategories.map((item,index)=>(
          <TouchableOpacity onPress={()=>{}} style={styles.catbtn}>
            <MaterialCommunityIcons name={item.iconName as any} size={20} color={Colors.black}/>
          <Text>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
    </GestureHandlerRootView>
  )
}

export default CategoryButtons
const styles=StyleSheet.create({
    title:{
      fontSize:22,
      fontWeight:'700',
      color:Colors.black,
    },
    catbtn:{
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:Colors.white,
      paddingHorizontal:16,
      paddingVertical:10,
      borderRadius:10,
      shadowColor:'#333333',
      shadowOffset:{width:1,height:2},
      shadowOpacity:0.1,
      shadowRadius:3,
    }
})