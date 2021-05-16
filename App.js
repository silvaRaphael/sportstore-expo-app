import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions, Image, ScrollView, Animated } from 'react-native';

import { ballProducts, soccerShoesProducts } from './src/api';

import ProductCard from './src/components/ProductCard';

const App = () => {

  const { width } = Dimensions.get("window");

  const scrollXSoccerBall = React.useRef(new Animated.Value(0)).current;
  const scrollXSoccerShoe = React.useRef(new Animated.Value(0)).current;
  
  return (
    <SafeAreaView style={styles.container}>
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

      <ScrollView contentContainerStyle={{ paddingTop: 100, paddingBottom: 40 }} >

        {/* Category Section */}
          
        {/* /Category Section */}

        {/* Product Section */}
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
          {
            ballProducts.map(item => {
                return(
                  <ProductCard
                    key={item.id.toString()}
                    item={item}
                    name={item.name}
                    image={item.image}
                    color={item.color.hex}
                    colorName={item.color.name}
                    sizes={item.sizes}
                  />
                )
              })
            }
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
          {
            ballProducts.map((item, index) => {
            
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
            })
          }
        </View>

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
          {
            soccerShoesProducts.map(item => {
                return(
                  <ProductCard
                    key={item.id.toString()}
                    item={item}
                    name={item.name}
                    image={item.image}
                    color={item.color.hex}
                    colorName={item.color.name}
                    sizes={item.sizes}
                  />
                )
              })
            }
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
          {
            soccerShoesProducts.map((item, index) => {
            
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
            })
          }
        </View>
        {/* /Product Section */}

        </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;