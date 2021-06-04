import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity } from 'react-native';

const CategoryButton = ({
  category, icon, selected, onPress
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 30
      }}
    >
      <MaterialCommunityIcons name={icon} size={18} color={selected ? "#333" : "#999"} />
      <Text
        style={{
          fontSize: 14,
          fontWeight: "bold",
          color: selected ? "#333" : "#999",
          paddingLeft: 6
        }}
      >
        {category}
      </Text>
    </TouchableOpacity>
  )
};

export default CategoryButton;