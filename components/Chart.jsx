import React from "react";
import { View } from "react-native";
import { VictoryPie } from "victory-native";


const Chart = ({ categories }) => {
  const processCategoryDataToDisplay = () => {
    //expenses with confirmed status
    let chartData = categories.map((item) => {
      let confirmedExpenses = item.expenses.filter((x) => x.status == "C");
      var total = confirmedExpenses.reduce((a, b) => a + (b.total || 0), 0);

      return {
        name: item.name,
        y: total,
        expenseCount: confirmedExpenses.length,
        id: item.id,
      };
    });
    //filter categories with no expenses
    let filteredChartData = chartData.filter((a) => a.y > 0);
    let totalExpense = filteredChartData.reduce((a, b) => a + (b.y || 0), 0);

    //percentage calculation
    let finalChartData = filteredChartData.map((item) => {
      let percent = ((item.y / totalExpense) * 100).toFixed(0);
      return {
        label: `${percent}%`,
        y: Number(item.y),
        expenseCount: item.expenseCount,
        color: item.color,
        name: item.name,
        id: item.id,
      };
    });

    return finalChartData;
  };

  let chartData = processCategoryDataToDisplay();
  let colorScales = chartData.map((item) => item.color);
  return (
    <View>
      <VictoryPie data={chartData} colorScale={colorScales} />
    </View>
  );
};

export default Chart;
