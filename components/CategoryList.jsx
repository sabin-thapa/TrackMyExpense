import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  Animated,
} from "react-native";
import { icons, COLORS, SIZES } from "../config.js";

const CategoryList = ({ categories }) => {
  const categoryListHeightAnimatedValue = React.useRef(
    new Animated.Value(115)
  ).current;
  const [showMoreToggle, setShowMoreToggle] = React.useState(false);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          margin: 5,
          paddingVertical: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          borderRadius: 5,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}
      >
        <Image
          source={item.icon}
          style={{
            height: 20,
            width: 20,
            tintColor: item.color,
          }}
        />
        <Text style={{ marginLeft: SIZES.base, color: COLORS.primary }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Animated.View style={{ height: categoryListHeightAnimatedValue }}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item) => item.name.toString()}
          numColumns={2}
        />
      </Animated.View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: SIZES.base,
        }}
        onPress={() => {
          if (showMoreToggle) {
            Animated.timing(categoryListHeightAnimatedValue, {
              toValue: 110,
              duration: 300,
              useNativeDriver: false,
            }).start();
          } else {
            Animated.timing(categoryListHeightAnimatedValue, {
              toValue: 172.5,
              duration: 300,
              useNativeDriver: false,
            }).start();
          }

          setShowMoreToggle(!showMoreToggle);
        }}
      >
        <Text>{showMoreToggle ? "LESS" : "MORE"}</Text>
        <Image
          source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
          style={{
            height: 15,
            width: 15,
            marginLeft: 5,
            alignSelf: "center",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});

export default CategoryList;
