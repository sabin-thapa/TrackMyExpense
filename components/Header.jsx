import React from "react";
import {View, Text, Image} from 'react-native';
import {icons, COLORS, SIZES, FONTS} from "../config.js";

const Header = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      <View>
        <Text
          style={{ ...FONTS.h2, color: COLORS.primary, fontSize: SIZES.h2 }}
        >
          My Expenses
        </Text>
        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}>
          John Doe(private)
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: SIZES.padding,
        }}
      >
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: COLORS.lightGray,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={icons.calendar}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.lightBlue,
            }}
          />
        </View>
        <View style={{ marginLeft: SIZES.padding }}>
          <Text
            style={{ ...FONTS.h3, color: COLORS.primary, fontSize: SIZES.h3 }}
          >
            23 Dec, 2021
          </Text>
          <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>
            98% more than last month.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
