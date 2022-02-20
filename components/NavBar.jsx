import React from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView, FlatList, StyleSheet, Animated} from 'react-native';
import {icons, COLORS, SIZES, FONTS} from "../config.js";
const NavBar = () => {
  return (
    <View style = {{
        flexDirection: "row",
        height: 80,
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white
    }} 
    >
        <TouchableOpacity
            style = {{
                justifyContent: "center",
                width: 50
            }}
            onPress = {() => console.log("Back")}
        >
            <Image 
                source = {icons.back_arrow}
                style = {{
                    width: 30,
                    height: 30,
                    tintColor: COLORS.primary
                }}
                />
        </TouchableOpacity>
        <TouchableOpacity
            style = {{
                justifyContent: "center",
                alignItems: "flex-end",
                width: 50
            }}
            onPress = {() => console.log("Menu")}
        >
            <Image 
                source = {icons.more}
                style = {{
                    width: 30,
                    height: 30,
                    tintColor: COLORS.primary
                }}
                />
        </TouchableOpacity>
    </View>
  )
}

export default NavBar