import React from 'react';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, SafeAreaView, TouchableOpacity, Dimensions, Image, ScrollView, Animated, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as API from '../api';

import ProductCard from '../components/ProductCard';

const HomeScreen = ({ navigation }) => {

  const { width } = Dimensions.get("window");

  const [ ballProducts, setBallProducts ] = React.useState(API.ballProducts);
  const [ soccerShoesProducts, setSoccerShoesProducts ] = React.useState(API.soccerShoesProducts);

  const [ category, setCategory ] = React.useState(0);
  const [ searchBarActive, setSearchBarActive ] = React.useState(false);
  const [ searchText, setSearchText ] = React.useState("");

  const ref = React.useRef(null);

  const scrollXSoccerBall = React.useRef(new Animated.Value(0)).current;
  const scrollXSoccerShoe = React.useRef(new Animated.Value(0)).current;

  function resetProducts() {
    setBallProducts(API.ballProducts)
    setSoccerShoesProducts(API.soccerShoesProducts)
  }
  
  function filter(text) {

    if(text == "" || text == null) {
      setSearchBarActive(false)
      setSearchText("")
      resetProducts()

      return
    }

    text = text.toLowerCase()

    let category1 = API.ballProducts
    let category2 = API.soccerShoesProducts

    let v1 = category1.filter(item => {
      let name1 = item.name.toLowerCase()
      let type1 = item.type.toLowerCase()
      let brand1 = item.color.name.toLowerCase()

      const regex1 = RegExp(text + "*", 'g');
      let searchResult1 = regex1.exec(name1 + type1 + brand1)

      return searchResult1 != null && item
    })
    setBallProducts(v1)

    let v2 = category2.filter(item => {
      let name2 = item.name.toLowerCase()
      let type2 = item.type.toLowerCase()
      let brand2 = item.color.name.toLowerCase()

      const regex2 = RegExp(text + "*", 'g');
      let searchResult2 = regex2.exec(name2 + type2 + brand2)

      return searchResult2 != null && item
    })
    setSoccerShoesProducts(v2)
  }
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignitems: "center",
          marginTop: 80,
          marginHorizontal: 30,
          paddingBottom: 20
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: 34,
            color: "#333"
          }}
        >
          Sports Store
        </Text>

        <TextInput
          placeholder="Search Product"
          placeholderTextColor="#777"
          ref={ref}
          onBlur={() =>setSearchBarActive(!searchBarActive)}
          onChangeText={text => setSearchText(text)}
          onSubmitEditing={() => filter(searchText)}
          value={searchText}
          style={{
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#999",
            paddingHorizontal: 12,
            color: "#333",
            display: searchBarActive ? "flex" : "none",
          }}
        />
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 48,
            height: 48,
            display: searchBarActive ? "none" : null
          }}
          onPress={() => {
            setSearchBarActive(!searchBarActive)
            setSearchText("")
            ref.current.focus()
          }}
        >
          <FontAwesome name="search" size={18} color="gray" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingTop: 20, paddingBottom: 40 }} >
        {/* Category Section */}
          <View style={{ paddingBottom: 40 }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "flex-start",
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "#999",
                  marginHorizontal: 30,
                  paddingVertical: 20
                }}
              >
              <TouchableOpacity
                onPress={() => {
                  setCategory(0)
                  resetProducts()
                }}
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 30
                }}
              >
                <MaterialCommunityIcons name="dots-horizontal" size={18} color={category == 0 ? "#333" : "#999"} />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: category == 0 ? "#333" : "#999",
                    paddingLeft: 6
                  }}
                >
                  All
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setCategory(1)
                }}
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 30
                }}
              >
                <Ionicons name="ios-football" size={18} color={category == 1 ? "#333" : "#999"} />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: category == 1 ? "#333" : "#999",
                    paddingLeft: 6
                  }}
                >
                  Soccer Ball
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setCategory(2)
                }}
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 30
                }}
              >
                <MaterialCommunityIcons  name="shoe-formal" size={24} color={category == 2 ? "#333" : "#999"} />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: category == 2 ? "#333" : "#999",
                    paddingLeft: 6
                  }}
                >
                  Soccer Shoe
                </Text>
              </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        {/* /Category Section */}

        {/* Product Section */}
        {category == 0 || category == 1 && ballProducts.length > 0 ? (
          <>
            <View style={{ height: width / 2 + 80 }}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                snapToInterval={width - 60}
                scrollEventThrottle={1}
                decelerationRate="fast"
                contentContainerStyle={{ paddingRight: 30 }}
                onScroll={
                  Animated.event([{
                    nativeEvent: {
                      contentOffset: {
                        x: scrollXSoccerBall
                      }
                    }
                  }], { useNativeDriver: false })
                }
              >
              {ballProducts.map(item => {
                return (
                  <ProductCard
                    key={item.id.toString()}
                    item={item}
                    name={item.name}
                    image={item.image}
                    color={item.color.hex}
                    colorName={item.color.name}
                    onPress={() => {
                      navigation.navigate("Product", {
                        item: JSON.stringify(item)
                      })
                    }}
                  />
                )
              })}
              </ScrollView>
            </View>
            <View
              style={{
                width: width,
                height: 32,
                marginVertical: 12,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 40
              }}
            >
              {ballProducts.map((item, index) => {
              
                const dotSize = scrollXSoccerBall.interpolate({
                  inputRange: [ (width - 60) * (index - 1), (width - 60) * index, (width - 60) * (index + 1) ],
                  outputRange: [8, 16, 8],
                  extrapolate: "clamp"
                });

                const dotColor = scrollXSoccerBall.interpolate({
                  inputRange: [ (width - 60) * (index - 1), (width - 60) * index, (width - 60) * (index + 1) ],
                  outputRange: ["gray", item.color.hex , "gray"],
                  extrapolate: "clamp"
                });
      
                return (
                  <Animated.View
                    key={index.toString()}
                    style={{
                      backgroundColor: dotColor,
                      width: dotSize,
                      height: 8,
                      marginHorizontal: 2,
                      borderRadius: 4
                    }}
                  />
                )
              })}
            </View>
          </>
        ) : null }

        {category == 0 || category == 2 && soccerShoesProducts.length > 0 ? (
          <>
            <View style={{ height: width / 2 + 80 }}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                snapToInterval={width - 60}
                scrollEventThrottle={1}
                decelerationRate="fast"
                contentContainerStyle={{ paddingRight: 30 }}
                onScroll={
                  Animated.event([{
                    nativeEvent: {
                      contentOffset: {
                        x: scrollXSoccerShoe
                      }
                    }
                  }], { useNativeDriver: false })
                }
              >
                {soccerShoesProducts.map(item => {
                  return(
                    <ProductCard
                      key={item.id.toString()}
                      item={item}
                      name={item.name}
                      image={item.image}
                      color={item.color.hex}
                      colorName={item.color.name}
                      onPress={() => {
                        navigation.navigate("Product", {
                          item: JSON.stringify(item)
                        })
                      }}
                    />
                  )
                })}
              </ScrollView>
            </View>
            <View
              style={{
                width: width,
                height: 32,
                marginVertical: 12,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 40
              }}
            >
              {soccerShoesProducts.map((item, index) => {
                
                const dotSize = scrollXSoccerShoe.interpolate({
                  inputRange: [ (width - 60) * (index - 1), (width - 60) * index, (width - 60) * (index + 1) ],
                  outputRange: [8, 16, 8],
                  extrapolate: "clamp"
                });

                const dotColor = scrollXSoccerShoe.interpolate({
                  inputRange: [ (width - 60) * (index - 1), (width - 60) * index, (width - 60) * (index + 1) ],
                  outputRange: ["gray", item.color.hex , "gray"],
                  extrapolate: "clamp"
                });
      
                return (
                  <Animated.View
                    key={index.toString()}
                    style={{
                      backgroundColor: dotColor,
                      width: dotSize,
                      height: 8,
                      marginHorizontal: 2,
                      borderRadius: 4
                    }}
                  />
                )
              })}
            </View>
          </>
        ) : null }
        {/* /Product Section */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;