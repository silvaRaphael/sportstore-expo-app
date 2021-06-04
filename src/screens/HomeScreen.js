import React from 'react';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, SafeAreaView, TouchableOpacity, Dimensions, Image, ScrollView, Animated, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import API from '../api';

import ProductCard from '../components/ProductCard';
import CategoryButton from '../components/CategoryButton';

const HomeScreen = ({ navigation }) => {

  const { width, height } = Dimensions.get("window");

  const [ products, setProducts ] = React.useState(API);

  const [ category, setCategory ] = React.useState(null);
  const [ searchBarActive, setSearchBarActive ] = React.useState(false);
  const [ searchText, setSearchText ] = React.useState("");

  const ref = React.useRef(null);

  const productScrollX = React.useRef(new Animated.Value(0)).current;

  function filter(text) {

    text = text.toLowerCase()

    if(text == "" || text == null) {
      setSearchBarActive(false)
      setSearchText("")
      setProducts(API)
      return
    }
    
    let filteredProducts = API.map( api => {
      let filtering = api[1].filter(( item, index ) => {

        let name = item.name.toLowerCase()
        let type = item.type.toLowerCase()
        let brand = item.color.name.toLowerCase()

        const regex = RegExp(text + "*", "g");
        let searchResult = regex.exec(name + type + brand)
  
        return searchResult != null && api[1].slice(index,index + 1)
      })
      return [{}, filtering]
    })
    setProducts(filteredProducts)
  }

  React.useEffect(() => {

    category == null ? setProducts(API) : setProducts(API.slice(category,category + 1))

  }, [ category ]);
  
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
                <CategoryButton
                  category="All"
                  icon="dots-horizontal"
                  selected={category == null}
                  onPress={() => {
                    setCategory(null)
                  }}
                />
                {API.map(( res, index, arr ) => {
                  return (
                    <CategoryButton
                      key={"k"+index}
                      category={res[0].category}
                      icon={res[0].icon}
                      selected={category == index}
                      onPress={() => {
                        setCategory(index)
                      }}
                    />
                  )
                })}
              </View>
            </ScrollView>
          </View>
        {/* /Category Section */}

        {/* Product Section */}
        {products.map(( res, index ) => {

          let item = res[1];

          return (
            <View key={"k"+index}>
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
                          x: productScrollX
                        }
                      }
                    }], { useNativeDriver: false })
                  }
                >
                {item.map(item => {
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
                {item.map((item, index) => {

                  const dotSize = productScrollX.interpolate({
                    inputRange: [ (width - 60) * (index - 1), (width - 60) * index, (width - 60) * (index + 1) ],
                    outputRange: [8, 16, 8],
                    extrapolate: "clamp"
                  });
  
                  const dotColor = productScrollX.interpolate({
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
            </View>
          )
        })}
        {/* /Product Section */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;