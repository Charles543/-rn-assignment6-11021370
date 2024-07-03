import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../CartContext';

const data = [
{
    id: '1',
    title: 'Office Wear',
    price: '$120',
    image: require('../assets/dress1.png'),
    description: 'reversible angora cardigan'
},
{
    id: '2',
    title: 'Black',
    price: '$120',
    image: require('../assets/dress2.png'),
    description: 'reversible angora cardigan'
},

{
    id: '3',
    title: 'Church Wear',
    price: '$120',
    image: require('../assets/dress3.png'),
    description: 'reversible angora cardigan'
},

{
    id: '4',
    title: 'Lamerei',
    price: '$120',
    image: require('../assets/dress4.png'),
    description: 'reversible angora cardigan'
},

{
    id: '5',
    title: '21WN',
    price: '$120',
    image: require('../assets/dress5.png'),
    description: 'reversible angora cardigan'
},

{
    id: '6',
    title: 'Lopo',
    price: '$120',
    image: require('../assets/dress6.png'),
    description: 'reversible angora cardigan'
},

{
    id: '7',
    title: '21WN',
    price: '$120',
    image: require('../assets/dress7.png'),
    description: 'reversible angora cardigan'
},

{
    id: '8',
    title: 'Lame',
    price: '$120',
    image: require('../assets/dress1.png'),
    description: 'reversible angora cardigan'
},
];

const logo = require ('../assets/Logo.png')

const HomeScreen = () => {
const navigation = useNavigation();
const { addToCart } = useContext(CartContext);

const handleAddToCart = (item) => {
    addToCart(item);
    console.log(`${item.title} added to cart`);
};

const renderItem = ({ item }) => {
    const isLocalImage = typeof item.image === 'number';
    return (
        <TouchableOpacity style={styles.itemContainer}>
        {isLocalImage ? (
            <Image source={item.image} style={styles.image} />
        ) : (
            <Image source={{ uri: item.image }} style={styles.image} />
        )}
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.addIcon} onPress={() => handleAddToCart(item)}>
            <Icon name="add-circle" size={30} color="#000" />
        </TouchableOpacity>
        </TouchableOpacity>
    );
};

return (
    <View style={styles.container}>
    <View style={styles.header}>
        <Icon name="menu" size={30} />
        <Image source={logo} />
        <View style={styles.headerIcons}>
        <Icon name="search" size={30} />
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Icon name="shopping-cart" size={30} />
        </TouchableOpacity>
    </View>
    </View>
    <View style={styles.storyRow}>
        <Text style={styles.story}>OUR STORY</Text>
        <TouchableOpacity style={styles.sortIcons}>
            <Icon name="sort"/>
            <Icon name="list"/>
        </TouchableOpacity>
    </View>
    
    <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        numColumns={2}
    />
    </View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
},
header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
},
headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
},
headerIcons: {
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-between',
},
storyRow: {
    alignItems:'center',
    flexDirection:'row',
},

sortIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'space-between',
    width: 100,
    marginHorizontal:200,
    margin:20,
},
story: {
    fontSize: 30,
    marginVertical: 10,
    alignSelf: 'left',
    left:23,
},
list: {
    alignItems: 'center',
},
itemContainer: {
    width: '45%',
    margin: 10,
    alignItems: 'center',
    position: 'relative',
},
image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
},
title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
},
description: {
    fontSize: 14,
    color: '#888',
},
price: {
    fontSize: 16,
    color: '#cc6600',
},
addIcon: {
    position: 'absolute',
    bottom: 320,
    right: 10,
},
});

export default HomeScreen;
