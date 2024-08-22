import { View, Text ,StyleSheet, Image, TextInput } from 'react-native'
import React ,{useState}from 'react'
import { Stack } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import {useHeaderHeight} from '@react-navigation/elements';
import { SearchBar } from 'react-native-screens'
import CategoryButtons from '@/components/CategoryButtons';
import Listings from '@/components/Listings';
import listingData from '@/data/destination.json'
import IndiaList from '@/data/Indiadest.json'
import Indialist from '@/components/Indialist'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
type Props = {
  listings: any[]; // Better type definition
};
const home = () => {
  const headerHeight=useHeaderHeight();
  const [category, setCategory] = useState('All');
  const onCatChanged = (category: string) => {

    console.log("Category: ",category);
    
    setCategory(category);}
  return (
    <>
    <Stack.Screen options={{
      headerTransparent: true,
      headerTitle : "GLOBEXPLORE",
      headerTitleAlign:'center',
      headerTitleStyle:{fontWeight: 'bold',fontSize:22},
      headerLeft: () => (
        <TouchableOpacity onPress={() => {}} style={{marginLeft: 20,backgroundColor: Colors.white,
          padding: 10,
          borderRadius: 10,
          shadowColor: '#171717',
          shadowOffset: {width: 2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,}}>
          <Ionicons name='person-circle' size={20} color={Colors.black} back/>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => {}} style={{
          marginRight: 20, 
          backgroundColor: Colors.white,
          padding: 10,
          borderRadius: 10,
          shadowColor: '#171717',
          shadowOffset: {width: 2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}>
          <Ionicons name='notifications' size={20} color={Colors.black}/>
        </TouchableOpacity>
      ),
    }}/>
    <View style={[styles.container,{paddingTop:headerHeight}]}>
      {/* <Text style={styles.headingtxt}>Explore The Beautiful World!</Text> */}
    {/* <CategoryButtons onCategoryChanged={onCatChanged}/> */}
    <GestureHandlerRootView>
      <ScrollView showsVerticalScrollIndicator={false}>
    <View>
      <Text style={styles.headingtxt}>International</Text>
    </View>

    <Listings listings={listingData} />
    <View>
      <Text style={styles.headingtxt}>India</Text>
    </View>
    <Indialist listings={IndiaList}/>
    </ScrollView>
    </GestureHandlerRootView>
    </View>
    
    </>
  )
}

export default home

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding:20,
        backgroundColor:Colors.bgcolor,

        
    },
    headingtxt:{
        fontSize:28,
        fontWeight:'800',
        color:Colors.black
    },
    

})
