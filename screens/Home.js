import React, { useContext } from "react";
import { View, ScrollView } from "react-native";
import { COLORS } from "../config.js";
import categoriesData from "../data/categoriesData.js";
import NavBar from "../components/NavBar";
import Header from "../components/Header.jsx";
import CategoryHeader from "../components/CategoryHeader";
import { ModeContext } from "../context/ModeProvider.jsx";
import CategoryList from "../components/CategoryList.jsx";
import Chart from "../components/Chart.jsx";

const Home = () => {
  const { mode } = useContext(ModeContext);
  const [categories, setCategories] = React.useState(categoriesData);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
      <NavBar />
      <Header />
      <CategoryHeader />

      <ScrollView contentContainerstyle={{ paddingBottom: 60 }}>
        {mode == "menu" && <CategoryList categories={categories} />}
        {mode == "chart" && <Chart categories={categories} />}
      </ScrollView>
    </View>
  );
};

export default Home;
