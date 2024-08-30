import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { ListingType } from '@/Types/listingType';
import listingData from '@/data/destination.json';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const { width } = Dimensions.get('window');
const Img_Height = 300;

const listingsDetails = () => {
  const { id } = useLocalSearchParams();
  const listing: ListingType = (listingData as ListingType[]).find((item) => item.id == id);
  const navigation = useNavigation();

  return (
<>
<Stack.Screen options={{
      // headerTransparent: true,
      headerTitle : " ",
  
      
      // headerLeft: () => (
      //   <TouchableOpacity onPress={() => {}} style={{marginLeft: 20,backgroundColor: Colors.white,
      //     padding: 10,
      //     borderRadius: 10,
      //     shadowColor: '#171717',
      //     shadowOffset: {width: 2, height: 4},
      //     shadowOpacity: 0.2,
      //     shadowRadius: 3,}}>
      //     <Ionicons name='person-circle' size={20} color={Colors.black} back/>
      //   </TouchableOpacity>
      // ),
      // headerRight: () => (
      //   <TouchableOpacity onPress={() => {}} style={{
      //     marginRight: 20, 
      //     backgroundColor: Colors.white,
      //     padding: 10,
      //     borderRadius: 10,
      //     shadowColor: '#171717',
      //     shadowOffset: {width: 2, height: 4},
      //     shadowOpacity: 0.2,
      //     shadowRadius: 3,
      //   }}>
      //     <Ionicons name='notifications' size={20} color={Colors.black}/>
      //   </TouchableOpacity>
      // ),
    }}/>
    <View style={styles.container}>
      {/* <View style={styles.header}>
      <GestureHandlerRootView>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name='arrow-back' size={24} color='black' />
        </TouchableOpacity>
        </GestureHandlerRootView>
        <View><Text></Text></View>
        <GestureHandlerRootView>
          <TouchableOpacity onPress={() => {}} style={styles.bookmarkBtn}>
            <Ionicons name='bookmark-outline' size={24} color={Colors.black} />
          </TouchableOpacity>
        </GestureHandlerRootView>
      </View> */}
      
      <Image source={{ uri: listing.image }} style={styles.image} />
      <View style={styles.contentwrapper}>
        <Text style={styles.listingName}>{listing.name}</Text>
        <View style={styles.locationContainer}>
          <FontAwesome5 name="map-marker-alt" size={18} color={Colors.black} />
          <Text style={styles.listinglocation}>{listing.location}</Text>
        </View>
        <View style={styles.highlightwrapper}>
          <View style={{flexDirection:'row'}}>
            <View style={styles.highlighticon}>
              <Ionicons name='time' size={18} color={Colors.black}/>
            </View>
            <View>
              <Text style={styles.highlightTxt}>Duration</Text>
              <Text style={styles.highlightTxtvalue}>{listing.duration} Days</Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={styles.highlighticon}>
              <FontAwesome5 name='users' size={18} color={Colors.black}/>
            </View>
            <View>
              <Text style={styles.highlightTxt}>Person</Text>
              <Text style={styles.highlightTxtvalue}>{listing.duration} Days</Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={styles.highlighticon}>
              <Ionicons name='star' size={18} color={Colors.black}/>
            </View>
            <View>
              <Text style={styles.highlightTxt}>Rating</Text>
              <Text style={styles.highlightTxtvalue}>{listing.rating} Days</Text>
            </View>
          </View>
        </View>
        <Text style={styles.listingdetails}>{listing.description}</Text>
      </View>
      <View style={styles.footer}>
        <GestureHandlerRootView>
        <TouchableOpacity onPress={()=>{}} style={[styles.footerBtn,styles.footerbookBtn]}>
          <Text style={styles.footertxt}>Book Now</Text>
        </TouchableOpacity>
        </GestureHandlerRootView>
        <GestureHandlerRootView>
        <TouchableOpacity onPress={()=>{}} style={styles.footerBtn}>
          <Text style={styles.footertxt}>${listing.price}</Text>
        </TouchableOpacity>
        </GestureHandlerRootView>
      </View>
    </View>
  </>
  );
};

export default listingsDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentwrapper:{
    padding:20,
  },
  listinglocation:{
    fontSize:14,
    marginLeft:5,
    color:Colors.black
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    position: 'absolute',
    zIndex: 10,
    width: '100%',
  },
  image: {
    width: width,
    height: Img_Height,
  },
  detailsContainer: {
    padding: 16,
  },
  listingName: {
    fontSize: 24,
    // fontWeight: 'bold' ,
    letterSpacing:0.5,
    color:Colors.black,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom:10,
  },
  locationText: {
    marginLeft: 8,
    fontSize: 16,
    color: Colors.white,
  },
  backBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    padding: 6,
  },
  bookmarkBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    padding: 6,
  },
  highlightwrapper:{
    flexDirection:"row",
    marginVertical:20,
    justifyContent:'space-between'
  },
  highlighticon:{
    backgroundColor:'#F4F4F4',
    paddingHorizontal:8,
    paddingVertical:5,
    borderRadius:8,
    marginRight:5,
    alignItems:'center'
  },
  highlightTxt:{
    fontSize:12,
    color:'#999'
  },
  highlightTxtvalue:{
    fontSize:14,
    // fontWeight:'bold',
  },
  listingdetails:{
    fontSize:16,
    color:Colors.black,
    lineHeight:25
  },
  footer:{
    flexDirection:'row',
    position:'absolute'
    ,bottom:0,
    padding:20,
    paddingBottom:30,
    width:width
  },
  footerBtn:{
    flex:1,
    backgroundColor:Colors.black,
    padding:20,
    borderRadius:10,
    alignItems:'center'
  },
  footertxt:{
    color:Colors.white,
    fontSize:16,
    fontWeight:'600',
    textTransform:'uppercase'
  },
  footerbookBtn:{
    marginRight:20
  }
});
