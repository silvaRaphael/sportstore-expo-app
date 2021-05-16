import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View, TouchableOpacity, Dimensions, Image, ScrollView, Animated } from 'react-native';

const { width } = Dimensions.get("window");

const ProductCard = ({
  item, name, image, color, colorName, sizes
}) => {

  const breakLine = text => {
    let textSplit = text.split(" ")
    return textSplit.join("\n")
  }

  return(
    <View
      style={{
        position: "relative",
        flexDirection: "row",
        justifyContent: "flex-end",
        width: width - 90,
        minHeight: width / 2 + 80,
        marginLeft: 30,
        alignSelf: "flex-start",
      }}
    >
      <View
        style={{
          flex: 1,
          position: "absolute",
          left: 0,
          minHeight: width / 2 + 80,
          width: width / 2 - 45,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            marginTop: 20
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: item.type == "soccer-shoe" ? 24 : 26,
              color: "#333",
            }}
          >
            {breakLine(item.name)}
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            alignItems: "center",
            bottom: 100
          }}
        >
          <FontAwesome name="dollar" size={14} color="#666" />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              color: "#666",
              marginLeft: 4
            }}
          >
            {item.price}
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            marginBottom: 20,
            width: width / 2 - 45,
            flexWrap: "wrap"
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 12,
              color: "gray"
            }}
          >
            Available Size
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            {
              sizes.map((size, index) => (
                <View
                key={index.toString()}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "gray",
                  minWidth: 36,
                  maxHeight: 36,
                  padding: 8,
                  marginRight: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    color: "#555"
                  }}
                >
                  {size}
                </Text>
              </View>
              ))
            }
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: item.color.hex,
          justifyContent: "flex-end",
          padding: 20,
          paddingHorizontal: 30,
          width: width / 2 - 45,
          height: width / 2 + 80,
          borderRadius: 25,
        }}
      >
        <Image
          source={{ uri: item.image}}
          style={{
            position: "absolute",
            top: 20,
            left: -40,
            width: item.type == "soccer-shoe" ? width / 2 : width / 2 - 30,
            height: width / 2 - 30,
          }}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            color: item.color.nameHex ? item.color.nameHex : "white"
          }}
        >
          {breakLine(item.color.name)}
        </Text>
      </View>
    </View>
  )
};

export default ProductCard;