import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { CartContext } from '../CartContext';

const CartScreen = () => {
  const { cart, removeFromCart } = useContext(CartContext);

const handleRemoveFromCart = (item) =>{
  removeFromCart(item);
  console.log(`${item.title} removed from cart`);
};

const calculateTotal = () => {
  return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
};


  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => handleItemPress(item)}>
      <Image source={item.image} style={styles.image}/>
      <View>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.removeIcon} onPress={() => handleRemoveFromCart(item)}>
            <Icon name="remove-circle" size={30} color="#000" />
        </TouchableOpacity>
    </TouchableOpacity>
  );

  const handleItemPress = (item) => {
    console.log('Item pressed:', item);
  };
  

  const logo = require ('../assets/Logo.png')

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Icon name="search" size={30} />
      </View>
      <Text style={styles.title}>CHECKOUT</Text>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

    <View style={styles.checkoutContainer}>
      <View style={styles.totalContainer}>
        <Text style={styles.estimatedTotal}>EST. TOTAL</Text>
        <Text style={styles.totalAmount}>${calculateTotal()}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Icon name="shopping-bag" size={24} color="#fff" />
        <Text style={styles.checkoutText}>CHECKOUT</Text>
      </TouchableOpacity>
    </View>
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
    alignItems: 'center',
    paddingHorizontal: 130,
    // paddingVertical: 10,
  },
  logo: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'center',
  },
  list: {
    alignItems: 'center',
  },
  itemContainer: {
    width: 370,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:'space-between',
  },

  image:{
    width: '100%',
    height: 100,
    width:100,
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#cc6600',
  },
  description: {
    fontSize: 14,
    color: '#888',
  },
  removeIcon: {
    top:35,
  },

  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  estimatedTotal: {
    fontSize: 18,
    color: '#444',
    left:20,
  },
  totalAmount: {
    fontSize: 24,
    color: '#cc6600',
    right:20,
  },
  checkoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 130,
    borderRadius: 5,
    height: 67,
  },
  checkoutText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 18,
  },
});

export default CartScreen;
