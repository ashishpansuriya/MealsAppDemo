import React, { useEffect } from "react";

import { View, StyleSheet, Text, Button, ScrollView, ImageBackground } from "react-native";
import { useSelector } from "react-redux";

const MealsDetailsScreen = props => {

    const data = props.route.params;
    const ids = data.mealId;
    const title = data.mealTitle;
    const mealData = useSelector(state => state.meals.meals);
    const selectMeals = mealData.find(meal => meal.id === ids);

    // useEffect(() => {
    //     props.navigation.setParams({mealsTitle: selectMeals.title});
    // }, [selectMeals]);

    const ListItem = props => {
        return (<View>
            <Text style={styles.simple}>
                {props.children}
            </Text>
        </View>)
    };

    return (
        <ScrollView>

            <View style={{ borderRadius: 20, width: '90%', alignSelf: 'center', marginTop: 10, height: 200, overflow: "hidden" }}>
                <ImageBackground source={{ uri: selectMeals.imageUrl }} style={styles.BGImage} >

                    <View style={styles.mealDetails}>
                        <Text style={{ color: "#fff" }}> {selectMeals.duration} Min</Text>
                        <Text style={{ color: "#fff" }}> {selectMeals.complexity.toUpperCase()}</Text>
                        <Text style={{ color: "#fff" }}> {selectMeals.afforadbility.toUpperCase()}</Text>
                    </View>
                </ImageBackground>

            </View>

            <Text style={styles.header}>Ingredients</Text>
            {selectMeals.ingredinets.map(ingredinets => <ListItem> {ingredinets}</ListItem>)}
            <Text style={styles.header}>Steps</Text>
            {selectMeals.steps.map(steps => <ListItem> {steps}</ListItem>)}

        </ScrollView>

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageStyle: {
        width: '80%',
        height: 200,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 20
    },

    mealDetails: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'flex-end',
        flex: 1,
        width: '100%',
        padding: 10,
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    title: {
        fontSize: 18,
        width: '100%',
        color: '#fff',
        flex: 1,
        textAlign: 'center',
        alignContent: 'space-around',
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 5
    },

    BGImage: {
        width: '100%',
        height: '100%',
    },

    rowContent: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 30,
        marginTop: 20
    },

    header: {
        textAlign: 'center',
        padding: 10,
        marginHorizontal: 20,
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold'
    },

    simple: {
        textAlign: 'left',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 20,
        marginTop: 20,
        fontSize: 14,
    }
});

export default MealsDetailsScreen;