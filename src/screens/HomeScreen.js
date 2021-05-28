import React from 'react';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, SafeAreaView, TouchableOpacity, Dimensions, Image, ScrollView, Animated } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ballProducts, soccerShoesProducts } from '../api';

import ProductCard from '../components/ProductCard';

const HomeScreen = ({ navigation }) => {

  const { width } = Dimensions.get("window");

  const [ category, setCategory ] = React.useState(0);

  const scrollXSoccerBall = React.useRef(new Animated.Value(0)).current;
  const scrollXSoccerShoe = React.useRef(new Animated.Value(0)).current;
  
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
            fontSize: 36,
            color: "#333"
          }}
        >
          Sports Store
        </Text>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 48,
            height: 48
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
        {category == 0 || category == 1 ? (
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

        {category == 0 || category == 2 ? (
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