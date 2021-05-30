import React from 'react';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, SafeAreaView, TouchableOpacity, Dimensions, Image, ScrollView, Animated, Alert } from 'react-native';

import { ballProducts, soccerShoesProducts } from '../api';

import ProductCard from '../components/ProductCard';

const ProductScreen = ({ navigation, route }) => {

  const { width, height } = Dimensions.get("window");

  const breakLine = text => {
    let textSplit = text.split(" ")
    return textSplit.join("\n")
  }

  const [ sizeSelected, setSizeSelected ] = React.useState(null);
  
  const item = JSON.parse(route.params.item);

  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <View
        style={{
          marginHorizontal: 30,
          position: "absolute",
          top: 80,
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 48,
            height: 48,
            marginLeft: -14,
          }}
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Ionicons name="arrow-back" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      
      <View
        style={{
          flexDirection: "row",
          width: width,
          height: height / 2,
          marginLeft: 30,
        }}
      >
        <View
          style={{
            width: width / 2 - 30,
            marginTop: 150
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: item.type == "soccer-shoe" ? 28 : 36,
              color: "#333",
            }}
          >
            {breakLine(item.name)}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: item.color.hex,
            width: width / 2,
            height: 180 + width / 2 + 40,
            borderBottomLeftRadius: 35,
          }}
        >
          <Image
            source={item.image}
            style={{
              position: "absolute",
              top: 180,
              left: item.type == "soccer-shoe" ? -60 : -40,
              width: item.type == "soccer-shoe" ? width / 2 + 60 : width / 2 + 30,
              height: width / 2 + 30,
            }}
          />
        </View>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: width,
          height: height / 2,
          paddingHorizontal: 30,
          justifyContent: "space-evenly",
        }}
      >
        <View style={{}} >
          <Text
            style={{
              fontWeight: "normal",
              fontSize: 14,
              color: "#333"
            }}
          >
            Select Size
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 14,
            }}
          >
            {
              item.sizes.map((size, index) => (
                <TouchableOpacity
                  key={index.toString()}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: size == sizeSelected ? "#000" : "gray",
                    backgroundColor: size == sizeSelected ? "#000" : null,
                    minWidth: 42,
                    height: 58,
                    padding: 8,
                    marginRight: 10,
                  }}
                  onPress={() => { setSizeSelected(size) }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: size == sizeSelected ? "#fff" : "#555"
                    }}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))
            }
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: width / 2 - 30,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 12,
                color: "gray",
              }}
              >
              Total price
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 4
              }}
            >
              <FontAwesome name="dollar" size={22} color="#222" />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 28,
                  color: "#222",
                }}
              >
                {item.price}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: width / 2 - 30
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#222",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
              }}
              onPress={(item) => {
                sizeSelected != null ? (
                  Alert.alert(
                    "",
                    "Product added on the Cart",
                    [
                      { text: "OK", onPress: () => navigation.goBack() }
                    ]
                  )
                ) : (
                  Alert.alert(
                    "",
                    "Select the size first",
                    [
                      { text: "OK", onPress: () => {} }
                    ]
                  )
                )
              }}
            >
              <Text
                style={{
                  fontWeight: "normal",
                  fontSize: 14,
                  color: "#fff",
                }}
              >
                Add to cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    </SafeAreaView>
  );
}

export default ProductScreen;