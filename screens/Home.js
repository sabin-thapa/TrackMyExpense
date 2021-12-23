import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, FlatList, StyleSheet, Animated} from 'react-native';
import {icons, COLORS, SIZES, FONTS} from "../config.js";
import {VictoryPie} from 'victory-native';

const Home = () => {

    const confirmStatus = "C"
    const pendingStatus = "P"
    const categoriesData = [
        {id: 1,
        name: "Personal",
        icon:icons.education,
        color:COLORS.yellow,
        expenses: [{
            id:1,
            title: "Groceries",
            desc: "Bought some groceries",
            location: "Dhulikhel",
            total: 100},
            {
                id:2,
                title: "Groceries",
                desc: "Bought some groceries",
                location: "Dhulikhel",
                total: 100,
                status: confirmStatus,
                },
                {
                    id:3,
                    title: "Groceries",
                    desc: "Bought some groceries",
                    location: "Dhulikhel",
                    total: 100,
                    status: confirmStatus,},

        ]
     
        },
        {id: 2,
            name: "Shop",
            icon:icons.food,
            color:COLORS.peach,
            expenses: [{
                id:1,
                title: "Groceries",
                desc: "Bought some groceries",
                location: "Dhulikhel",
                total: 100,
                status: confirmStatus,},
                {
                    id:2,
                    title: "Groceries",
                    desc: "Bought some groceries",
                    location: "Dhulikhel",
                    total: 100,
                    status: pendingStatus,},
                    {
                        id:3,
                        title: "Groceries",
                        desc: "Bought some groceries",
                        location: "Dhulikhel",
                        total: 100,
                        status: pendingStatus,},
    
            ]
         
            },
            {id: 3,
                name: "Ed",
                icon:icons.healthcare,
                color:COLORS.primary,
                expenses: [{
                    id:1,
                    title: "Groceries",
                    desc: "Bought some groceries",
                    location: "Dhulikhel",
                    total: 100,
                    status: confirmStatus,},
                    {
                        id:2,
                        title: "Groceries",
                        desc: "Bought some groceries",
                        location: "Dhulikhel",
                        total: 100,
                        status: confirmStatus},
                        {
                            id:3,
                            title: "Groceries",
                            desc: "Bought some groceries",
                            location: "Dhulikhel",
                            total: 100,
                            status: confirmStatus},
        
                ]
             
                },
                {id: 4,
                    name: "Ed",
                    icon:icons.healthcare,
                    color:COLORS.primary,
                    expenses: [{
                        id:1,
                        title: "Groceries",
                        desc: "Bought some groceries",
                        location: "Dhulikhel",
                        total: 100,
                        status: confirmStatus},
                        {
                            id:2,
                            title: "Groceries",
                            desc: "Bought some groceries",
                            location: "Dhulikhel",
                            total: 100,
                            status: confirmStatus},
                            {
                                id:3,
                                title: "Groceries",
                                desc: "Bought some groceries",
                                location: "Dhulikhel",
                                total: 100,
                                status: confirmStatus},
            
                    ]
                 
                    },
                    {id: 5,
                        name: "Ed",
                        icon:icons.healthcare,
                        color:COLORS.primary,
                        expenses: [{
                            id:1,
                            title: "Groceries",
                            desc: "Bought some groceries",
                            location: "Dhulikhel",
                            total: 100,
                            status: confirmStatus},
                            {
                                id:2,
                                title: "Groceries",
                                desc: "Bought some groceries",
                                location: "Dhulikhel",
                                total: 100,
                                status: confirmStatus},
                                {
                                    id:3,
                                    title: "Groceries",
                                    desc: "Bought some groceries",
                                    location: "Dhulikhel",
                                    total: 100,
                                    status: confirmStatus},
                
                        ]
                     
                        },
                        {id: 6,
                            name: "Ed",
                            icon:icons.healthcare,
                            color:COLORS.primary,
                            expenses: [{
                                id:1,
                                title: "Groceries",
                                desc: "Bought some groceries",
                                location: "Dhulikhel",
                                total: 100,
                                status: confirmStatus},
                                {
                                    id:2,
                                    title: "Groceries",
                                    desc: "Bought some groceries",
                                    location: "Dhulikhel",
                                    total: 100,
                                    status: confirmStatus},
                                    {
                                        id:3,
                                        title: "Groceries",
                                        desc: "Bought some groceries",
                                        location: "Dhulikhel",
                                        total: 100,
                                        status: confirmStatus},
                    
                            ]
                         
                            },
    ]

    const categoryListHeightAnimatedValue = React.useRef(new Animated.Value(115)).current;
    const [mode, setMode] = React.useState('chart')
    const [categories, setCategories] = React.useState(categoriesData)
    const[showMoreToggle, setShowMoreToggle] = React.useState(false)
    const renderNavBar = () => {
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
        )}

        const renderHeader = () => {
            return(
                <View style = {{paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding, backgroundColor: COLORS.white}}>
                    <View>
                        <Text style =  {{ ...FONTS.h2,color: COLORS.primary, fontSize: SIZES.h2}}>My Expenses</Text>
                        <Text style = {{...FONTS.h3,color: COLORS.darkgray}}>Achyut Thapa(private)</Text>
                    </View>
                    <View style={{display:'flex', flexDirection: 'row', marginTop: SIZES.padding}}>
                        <View style = {{ height: 50, width: 50, backgroundColor: COLORS.lightGray, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <Image 
                                source={icons.calendar}
                                style = {{
                                    width:20,
                                    height: 20,
                                    tintColor: COLORS.lightBlue
                                }}
                                />
                        </View>
                        <View style = {{marginLeft: SIZES.padding}}>
                            <Text style =  {{ ...FONTS.h3,color: COLORS.primary, fontSize: SIZES.h3}}>23 Dec, 2021</Text>
                            <Text style = {{...FONTS.body3,color: COLORS.darkgray}}>98% more than last month.</Text>
                        </View>
                    </View>
                </View>
            )
        }

        const renderCategoryHeader = () => {
            return(
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

        const renderCategoryList = () => {

            const renderItem = ({item}) => {
                return(
                    <TouchableOpacity 
                        style = {{
                            flex: 1,
                            flexDirection: 'row',
                            margin: 5,
                            paddingVertical: SIZES.radius,
                            paddingHorizontal: SIZES.padding,
                            borderRadius: 5,
                            backgroundColor: COLORS.white,
                            ...styles.shadow
                        }}
                    >
                        <Image 
                            source = {item.icon}
                            style = {{
                                height: 20,
                                width: 20,
                                tintColor: item.color
                            }}
                        />
                        <Text style = {{marginLeft: SIZES.base, color: COLORS.primary}}> {item.name} </Text>
                    </TouchableOpacity>
                )
            }
            return(
                <View>
                    <Animated.View  style = {{height: categoryListHeightAnimatedValue}}>
                        <FlatList 
                            data = {categories}
                            renderItem = {renderItem}
                            keyExtractor = {item => `$(item.id)`}
                            numColumns = {2}
                        />
                    </Animated.View>
                    <TouchableOpacity
                        style = {{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginVertical: SIZES.base
                        }}
                        onPress={() => {
                            if(showMoreToggle) {
                                Animated.timing(categoryListHeightAnimatedValue, {
                                    toValue: 110,
                                    duration: 300,
                                    useNativeDriver: false
                                }).start()
                            } else {
                                Animated.timing(categoryListHeightAnimatedValue, {
                                    toValue: 172.5,
                                    duration: 300,
                                    useNativeDriver: false
                                }).start()
                            }

                            setShowMoreToggle(!showMoreToggle)
                        }}
                    >
                        <Text>{showMoreToggle? "LESS" : "MORE" }</Text>
                        <Image 
                            source = {showMoreToggle ? icons.up_arrow : icons.down_arrow}
                            style = {{
                                height: 15, width: 15, marginLeft:5, alignSelf: 'center'
                            }}
                        />
                    </TouchableOpacity>
                </View>
            )
        }

        const processCategoryDataToDisplay = () => {
            //expenses with confirmed status
            let chartData = categories.map((item) => {
                let confirmedExpenses = item.expenses.filter(x => x.status == "C")
                var total = confirmedExpenses.reduce((a,b) => a+(b.total || 0), 0)

                return{
                    name: item.name,
                    y: total,
                    expenseCount: confirmedExpenses.length,
                    id: item.id
                }

            })
            //filter categories with no expenses
            let filteredChartData = chartData.filter(a => a.y > 0)
            let totalExpense = filteredChartData.reduce((a,b) => a+(b.y || 0), 0)

            //percentage calculation
            let finalChartData = filteredChartData.map((item) => {
                let percent = (item.y / totalExpense *100).toFixed(0)
                return{
                    label: `${percent}%`,
                    y: Number(item.y),
                    expenseCount: item.expenseCount,
                    color: item.color,
                    name: item.name,
                    id: item.id
                }
            })

            return finalChartData;
        }

        const renderChart = () => {
            let chartData = processCategoryDataToDisplay()
            let colorScales = chartData.map((item) => item.color)
            return(
                <View>
                    <VictoryPie 
                        data = {chartData}
                        colorScale={colorScales}
                    />
                </View>
            )
        }

    return (
        <View style = {{flex: 1, backgroundColor: COLORS.lightGray2}}>
            {/* NavBar */}
            {renderNavBar()}

            {/* Header */}
            {renderHeader()}

            {/* Category Header */}
            {renderCategoryHeader()}

            <ScrollView contentContainerstyle = {{paddingBottom: 60}} >
                {mode == 'menu' && <View>
                    {renderCategoryList()}
                </View>
                }
                {mode == 'chart' && <View>
                        {renderChart()}
                    </View>}
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3
    }
})

export default Home;