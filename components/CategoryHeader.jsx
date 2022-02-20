import React, {useContext, useState} from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView, FlatList, StyleSheet, Animated} from 'react-native';
import {icons, COLORS, SIZES, FONTS} from "../config.js";
import { ModeContext } from '../context/ModeProvider.jsx';

const CategoryHeader = ({categories}) => {
    const {mode, setMode} = useContext(ModeContext)
  return (
    <View style = {{flexDirection: 'row', paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding, backgroundColor: COLORS.white, justifyContent: 'space-between', alignItems: 'center'}}>
    <View>
        <Text style =  {{ ...FONTS.h2,color: COLORS.primary, fontSize: SIZES.h2}}>Categories</Text>
        <Text style = {{...FONTS.h3,color: COLORS.darkgray, fontSize: SIZES.h4}}>{categories?.length} total</Text>
    </View>
    <View style = {{display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: SIZES.padding}}>
        <TouchableOpacity
            style = {{  
                alignItems: 'center',
                justifyContent: "center",
                height: 50,
                width: 50,
                marginRight: SIZES.padding,
                borderRadius: 25,
                backgroundColor: mode == 'chart' ? COLORS.secondary: null
            }}
            onPress={() => setMode('chart')}
        >
            <Image 
                source = {icons.chart}
                resizeMode= 'contain'
                style = {{
                    height: 20, width: 20,
                    tintColor: mode == 'chart' ? COLORS.white : COLORS.darkgray,
             

                }}
            
            />
        </TouchableOpacity>

        <TouchableOpacity
            style = {{
            alignItems: 'center',
            justifyContent: "center",
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: mode == 'menu' ? COLORS.secondary: null
        }}
        onPress={() => setMode('menu')}
        >
            <Image 
                source = {icons.menu}
                style = {{
                    height: 20, width: 20,
                    tintColor: mode == 'menu' ? COLORS.white : COLORS.darkgray
                    
                }}
            
            />
        </TouchableOpacity>
    </View>
</View>
  )
}

export default CategoryHeader