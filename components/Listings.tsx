import { View, Image, Text, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import React ,{useState,useEffect}from 'react';
import { ListingType } from '@/Types/listingType';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler'

import Colors from '@/constants/Colors';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import category from '@/app/(tabs)/home'

type Props = {
  listings: any[]; // Better type definition
};

const Listings = ({ listings}: Props) => {
    const [loading, setLoading]  = useState(false);
    useEffect(() => {
        console.log('Update Listing');
        setLoading(true);
        setTimeout(() => {

            setLoading(false)
    }, 200);
    }, [category]);
  const renderItems: ListRenderItem<ListingType> = ({ item }) => {
    return (
      <Link href={`/listing[id]`} asChild>
        <ScrollView
        horizontal>
        <TouchableOpacity>
          <View style={styles.item}>
            <Image 
              source={{ uri: item.image }}
              style={styles.image} // Use styles.image instead of inline styles
            />
            <View style={styles.bookmark}> 
              <Ionicons name='bookmark-outline' size={20} color={Colors.white} />
            </View>
            <Text style={styles.itemtxt} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome5 name='map-marker-alt' size={18} color={Colors.primaryColor} />
              <Text style={styles.locationtxt}>{item.location}</Text>
              <Text style={styles.pricetxt}>${item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
      </Link>
    );
  };

  return (
    <View>
      <FlatList
        data={loading?[]:listings}
        renderItem={renderItems}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({
  pricetxt: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.primaryColor,
    marginLeft:70
  },
  locationtxt: {
    fontSize: 12,
    marginLeft: 5
  },
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    width: 220,
    position: 'relative' // Ensures bookmark is positioned correctly
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 30
  },
  bookmark: {
    position: 'absolute',
    top: 10, // Adjusted to position correctly within the item view
    right: 10,
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.white
  },
  itemtxt: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 10
  }
});
